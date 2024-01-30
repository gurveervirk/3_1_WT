const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array: ', (input) => {
    res = input.split(" ").map((e) => parseInt(e)).reduce((a, b) => a + b);
    console.log(res);
    // arr = [1, 2, 3];
    // arr.length = 6;
    // console.log(arr);
    rl.close();
});