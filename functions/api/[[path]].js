export async function onRequestGet({ request }) {
    try {
        const { pathname, searchParams } = new URL(request.url);

        // Split by / and remove first empty element
        var paths = pathname.split('/').slice(2);

        const DOMAIN = "https://cloudflare-json-server.pages.dev";
        var resp = await fetch(DOMAIN + "/db.json");
        var data = await resp.json();

        paths.forEach(e => {
            if (Object.keys(object).includes(e)) data = data[e];
            else return new Response("Not found", { status: 404 });
        });

        // Query parameters
        for (const [key, value] of searchParams) {
            if (key === "hide") continue;
            data = data.filter(e => e[key].toString() === value);
        }

        const hideData = searchParams.getAll("hide");
        if (hideData) hideData.forEach(e => delete data[e]);

        if (!data) return new Response("Not found", { status: 404 });

        return new Response(JSON.stringify(data), {
            status: 200
        });
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}