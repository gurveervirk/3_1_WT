const fs = require('fs')
const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter file name you want to read :",(fileName)=>{
    const data = fs.readFileSync(fileName, 'utf-8');
    console.log(data);
    r1.close();
})