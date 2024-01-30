const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*\(\)_\-\+=<>,\.\?;:'"\/\[\\\]\{\}]).{7,15}$/;
rl.question('Enter password: ', (e) => {
    console.log(pat.test(e));
    rl.close();
});