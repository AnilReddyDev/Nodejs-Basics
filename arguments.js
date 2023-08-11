const minimist = require("minimist");
const getArg = minimist(process.argv.slice(2));

console.log(getArg.name);


