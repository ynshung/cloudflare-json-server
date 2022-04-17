const { watch } = require("chokidar");
const { build } = require("./index")

watch("json", { ignoreInitial: true }).on('all', (event, path) => {
    console.log(event, path);
    build();
});
