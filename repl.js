//here we create a custom node terminal

const repl = require("repl");
const local = repl.start("$");//inside quotes we can give anything

local.on("exit",()=>{
    console.log("Exiting the terminal");
    process.exit();
})
