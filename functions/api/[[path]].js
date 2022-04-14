export async function onRequestGet({ request }) {
    try {
        const { pathname, searchParams } = new URL(request.url);

        // Split by / and remove first empty element
        var paths = pathname.split('/').slice(2);

        const json_url = "https://cloudflare-json-server.pages.dev/db.json";
        var resp = await fetch(json_url);
        var data = await resp.json();

        paths.forEach(e => data = data[e]);

        for (const [key, value] of searchParams) {
            if (key === "hide") continue;
            data = data.filter(e => e[key] === value)[0];
        }

        const hideData = searchParams.getAll("hide");
        if (hideData) hideData.forEach(e => delete data[e]);

        if (!data) return new Response("Not found", { status: 404 });

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: headers
        });
    } catch (err) {
        return new Response(err, {status: 500})
    }
}