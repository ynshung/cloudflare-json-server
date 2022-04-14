import db from "../../db.json";

var allowed = ['cloudflare-json-server.pages.dev'];

export async function onRequestGet({ request }) {
    const { pathname, searchParams } = new URL(request.url);

    let headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
        'Access-Control-Allow-Headers': '*'
    });

    if (!allowed.includes(request.headers.get('origin'))) {
        return new Response('Not allowed', {
            status: 403,
            headers: headers
        });
    }

    // Split by / and remove first empty element
    var paths = pathname.split('/').slice(1);

    // const json_url = "/db.json";

    // var resp = await fetch(json_url);
    // var data = await resp.json();

    var data = db;

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
}