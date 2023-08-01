const { name, version, modules } = require('../package.json');
let shell = require("shelljs");

const build = async () => {
   modules.forEach(modulePath => {
     const module = require(`../${modulePath}/package.json`);
     console.log('serving module: '+module.name);
     shell.exec(`npm run build --prefix ${modulePath}`);
   });
};

const listen = async () => {
   modules.forEach(modulePath => {
     const module = require(`../${modulePath}/package.json`);
     console.log('listening module: '+module.name);
     shell.exec(`npm run build:start --prefix ${modulePath}`, { async: true });
   });
};

const serve = async () => {
   await build();
   await listen();
};

serve().catch((err) => {
  console.log(err);
});
