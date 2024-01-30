const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pat = /\bT[a-zA-Z]*[aeiou]\b/g;
rl.question('Enter string: ', (e) => {
    console.log([...e.matchAll(pat)]);
    rl.close();
});