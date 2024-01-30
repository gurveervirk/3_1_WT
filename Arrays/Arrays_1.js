const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter array: ', (input) => {
  arr = input.split(" ").map((e) => parseInt(e)), res = 0, max = 0, l = arr.length, dic = new Map();
  for(let i = 0; i < l; i++){
      if(!dic.has(arr[i])) dic.set(arr[i], 1);
      else dic.set(arr[i], dic.get(arr[i]) + 1);
      if(dic.get(arr[i]) > max){
          max = dic.get(arr[i]);
          res = arr[i];
        }
    }
  console.log(res);
  rl.close();
});