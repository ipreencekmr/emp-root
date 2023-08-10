const { name, modules } = require("../package.json");
let shell = require("shelljs");

const publish = async () => {
    modules.forEach(modulePath => {
        const module = require(`../${modulePath}/package.json`);
        console.log(`publishing module: ${module.name}`);
        shell.exec(`npm run publish --prefix ${modulePath}`, {
            async: true 
        });
    });
    console.log(`publishing module: ${name}`);
    shell.exec("npm run publish", {
        async: true 
    });
};

const serve = async () => {
    await publish();
};

serve().catch((err) => {
    console.log(err);
});
