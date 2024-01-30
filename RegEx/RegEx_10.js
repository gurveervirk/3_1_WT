const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pat = /(^[aeiou]\S*[aeiou]$)|([aeiou])/gi;
rl.question('Enter string: ', (e) => {
    console.log([...e.matchAll(pat)]);
    rl.close();
});