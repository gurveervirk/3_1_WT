const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pat = /\b[a-zA-Z]{4}\b/g;
rl.question('Enter string: ', (e) => {
    console.log([...e.matchAll(pat)]);
    rl.close();
});