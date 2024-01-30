const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function unique(arr){
    let res = new Set();
    for(e of arr){
        if(!res.has(e)) res = new Set([...res, e]);
    }
    return res;
}

rl.question('Enter array: ', (input) => {
    arr = input.split(" ").map((e) => parseInt(e));
    console.log(unique(arr));
    rl.close();
});