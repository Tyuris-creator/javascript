let userInput = prompt("What's your name?")

console.log(`Hello, ${userInput}`)


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (userInput) => {
  console.log(`Hello, ${userInput}`);
  rl.close();
});
