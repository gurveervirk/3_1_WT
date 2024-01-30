const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasProp(obj, p) {
    console.log("\nhasOwnProperty:", obj.hasOwnProperty(p));
    console.log("Comparing with undefined:", !(obj[p] == undefined));
    f = 0;
    for(e in obj){
        if(e == p){
            console.log("Property Exists (using in)");
            f = 1;
            break;
        }
    }
    if(f == 0) console.log("Property Does Not Exist (using in)");
}

rl.question('Enter property: ', (e) => {
    const obj = {
        "prop1" : 1,
        "prop2" : 2,
        "prop3" : 3,
    }
    hasProp(obj, e);
    rl.close();
});