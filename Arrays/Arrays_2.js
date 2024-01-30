const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array: ', (input) => {
  arr = input.split(" ").map((e) => parseInt(e)), res = new Array();
  arr.forEach(e => {
    if(!res.includes(e)) res.push(e);
  });
  console.log(res);
  rl.close();
});