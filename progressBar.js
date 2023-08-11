const progressBar = require('progress');
const bar =new progressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:20,
})

const timer = setInterval(()=>{
    bar.tick();
    if (bar.complete){
        clearInterval(timer);
    }
},100);

//for getting different color output in commandline we chalk
const chalk = require("chalk")
console.log(chalk.greenBright("The package is downloading.."))
