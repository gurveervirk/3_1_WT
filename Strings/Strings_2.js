const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

rl.question('Enter number: ', (e) => {
    if(!isNumeric(e)) console.log(-1);
    else{
        if(parseInt(e) < 0) console.log(-1);
        else{
            e = Array.from(e).map((e) => parseInt(e));
            l = e.length;
            while(l-- > 0){
                let cur = e.splice(0, 1), res = "";
                for(let j = 0; j < cur; j++) res += cur + " ";
                console.log(res);
            }
        }
    }
    rl.close();
});