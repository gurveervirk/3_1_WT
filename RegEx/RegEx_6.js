const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pat = /\b[89][0-9]{9}\b/g;
rl.question('Enter string: ', (e) => {
    console.log(pat.test(e));
    rl.close();
});