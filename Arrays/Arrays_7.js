const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array: ', (input) => {
    arr = input.split(" ").map((e) => parseInt(e) ** 2);
    console.log(arr);
    rl.close();
});