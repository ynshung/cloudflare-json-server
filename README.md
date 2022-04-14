# Cloudflare JSON Server

Simple JSON server using [Cloudflare Pages](https://pages.cloudflare.com/) functions. Similiar to [combine-json](https://www.npmjs.com/package/combine-json) and [json-server](https://www.npmjs.com/package/json-server) combined!

Note: REST functionality is not fully implemented and may be buggy. Intended for read-only server.

## Usage

Clone or fork this repository, then edit the following file for your usage:
* `index.js`: `FOLDER_NAME` - Your intended JSON folder
* `functions/api/[[path.js]]`: Point the `DOMAIN` to the subdomain used such as `https://REPOSITORY_NAME.pages.dev` or custom domain used

Go to Cloudflare Pages and create a new project. Set the build command to `npm run gen` and leave everything blank. (Recommened to set `NODE_VERSION` to higher version such as `16.13.2`)

### Example

You may refer to the documentation of [combine-json](https://www.npmjs.com/package/combine-json) for the implementation of folder-structured JSON.

* Full JSON database compiled: [/db.json](https://cloudflare-json-server.pages.dev/db.json)
* Return the cars objects as an array: [/api/cars](https://cloudflare-json-server.pages.dev/api/cars)
* Return the first object of cars: [/api/cars/0](https://cloudflare-json-server.pages.dev/api/cars/0)
* Return city object with its key: [/api/city/KL](https://cloudflare-json-server.pages.dev/api/city/KL)
* Use `query` to get object with specific data: [/api/cars?name=Tesla](https://cloudflare-json-server.pages.dev/api/cars?name=Tesla)
* Use `hide` to hide unnecessary data from showing: [/api/cars/0?hide=image](https://cloudflare-json-server.pages.dev/api/cars/0?hide=image)

## Known Issues

Highly appreciated if you are able to fix these problem!

* Only string type are working for querying.
* Not tested: Querying when two or more objects have the same query value.
* Hiding only works on single object.
