const { combine } = require('./combine-json');
const { writeFile, existsSync, mkdirSync } = require("fs");

function build() {
    combine("json").then(json => {
        if (!existsSync("build")){
            mkdirSync("build");
        }
        writeFile("build/db.json", JSON.stringify(json, null, 4), function (err) {
            if (err) {
                console.log(err);
                return err;
            }
            console.log("JSON built successfully!");
        });
    })
}

build();

module.exports = { build };

