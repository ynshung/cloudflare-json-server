const { combine } = require('./combine-json');
const { writeFile } = require("fs");

combine('json').then(json => {
    writeFile("db.json", JSON.stringify(json, null, 4), function (err) {
        if (err) {
            console.log(err);
            return e;
        }
        console.log("json folder outputted to db.json")
    });
})

