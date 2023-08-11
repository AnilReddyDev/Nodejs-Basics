// const readline = require("readline");

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// rl.question("what is your name ? ",(name)=>{
//     console.log(`Hi, ${name}`)
//     rl.close();
// })

const prompt = require("prompt-sync")();//since prompt-sync is function we use () to call it
const name = prompt("What is your name ? ")
console.log(`Hi, ${name}`)