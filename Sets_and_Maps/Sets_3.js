const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function unique(arr){
    let res = new Set(arr);
    for(e of res) console.log(e);
}

rl.question('Enter array: ', (input) => {
    arr = input.split(" ");
    unique(arr);
    rl.close();
});