const { combine } = require('./combine-json');
const { writeFile } = require("fs");

const FOLDER_NAME = "json";

combine(FOLDER_NAME).then(json => {
    writeFile("db.json", JSON.stringify(json, null, 4), function (err) {
        if (err) {
            console.log(err);
            return e;
        }
        console.log("json folder outputted to db.json")
    });
})

