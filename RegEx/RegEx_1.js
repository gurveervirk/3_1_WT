const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pat = /[a-z]{4}[aeiou]/gi;
rl.question('Enter word: ', (e) => {
    console.log([...e.matchAll(pat)]);
    rl.close();
});