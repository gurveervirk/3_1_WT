const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array: ', (input1) => {
    rl.question('Enter from and to indices: ', (input2) => {
        arr = input1.split(" ").map((e) => parseInt(e));
        ft = input2.split(" ").map((e) => parseInt(e)), f = ft[0], t = ft[1], res = new Array();
        val = arr.splice(f, 1);
        i = 0
        while(i < arr.length){
            if(i == t) res.push(val[0]);
            res.push(arr[i]);
            i++;
        }   
        console.log(res);
        rl.close();
    });
});