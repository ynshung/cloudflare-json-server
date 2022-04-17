# Cloudflare JSON Server

Simple JSON server using [Cloudflare Pages](https://pages.cloudflare.com/) functions. Similiar to [combine-json](https://www.npmjs.com/package/combine-json) and [json-server](https://www.npmjs.com/package/json-server) combined!

Note: REST functionality is not fully implemented and may be buggy. Intended for read-only server.

## Usage

Clone or fork this repository, install dependencies by running `npm i` and run `npm run dev` to host a local API server at `http://localhost:8788`. Change the contents of the JSON file inside the json directory, reload the page (such as `/api/cars`) to see changes in realtime.

To host the server in Cloudflare Pages, create a new project there and choose your repository. Use "Create React App" as the framework preset. (Recommened to set `NODE_VERSION` to higher version such as `16.13.2`)

`npm run build` will create the JSON file at `build/db.json`. You can also combine with your existing frontend project.

### Cloudflare Workers

You can host the backend code separately by changing the api code from `export async function onRequestGet({ request })` to:

```js
addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
```

### Example

You may refer to the documentation of [combine-json](https://www.npmjs.com/package/combine-json) for the implementation of folder-structured JSON.

* Full JSON database compiled: [/db.json](https://cloudflare-json-server.pages.dev/db.json)
* Return the cars objects as an array: [/api/cars](https://cloudflare-json-server.pages.dev/api/cars)
* Return the first object of cars: [/api/cars/0](https://cloudflare-json-server.pages.dev/api/cars/0)
* Return city object with its key: [/api/city/KL](https://cloudflare-json-server.pages.dev/api/city/KL)
* Use querying to return an array of object/s with specific data: [/api/cars?name=Tesla](https://cloudflare-json-server.pages.dev/api/cars?name=Tesla)
* Use `hide` to hide unnecessary data from showing: [/api/cars?hide=image](https://cloudflare-json-server.pages.dev/api/cars?hide=image)
* Combining querying and hiding: [/api/cars?color=orange&hide=image](https://cloudflare-json-server.pages.dev/api/cars?color=orange&hide=image)

## Known Issues
* Does not work as well for keyed object (such as city folder in example), querying and hiding may be broken.
