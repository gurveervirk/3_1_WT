const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter string: ', (input) => {
    l = input.length, res = "";
    for(let i = 0; i < l; i++){
        let c = input.charAt(i);
        if(c.toUpperCase() == c) res += c.toLowerCase();
        else if(c.toLowerCase() == c) res += c.toUpperCase();
        else res += c;
    }
    console.log(res);
    rl.close();
});