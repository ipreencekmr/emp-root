const { name, modules } = require("../package.json");
let shell = require("shelljs");

const build = async () => {
    modules.forEach(modulePath => {
        const module = require(`../${modulePath}/package.json`);
        console.log(`dockerizing module: ${module.name}`);
        shell.exec(`npm run build:docker --prefix ${modulePath}`, {
            async: true 
        });
    });
    console.log(`dockerizing module: ${name}`);
    shell.exec("npm run build:docker", {
        async: true 
    });
};

const serve = async () => {
    await build();
};

serve().catch((err) => {
    console.log(err);
});
