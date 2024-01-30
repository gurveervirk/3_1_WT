const readline = require('readline');
// const fetch = require('node-fetch');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function camelCase(input) {
    l = input.length, res = "";
    for (let i = 0; i < l; i++) {
        let c = input.charAt(i);
        if (c.toUpperCase() == c) res += c.toLowerCase();
        else if (c.toLowerCase() == c) res += c.toUpperCase();
        else res += c;
    }
    return res;
}

rl.question('Enter empID: ', (empID) => {
    let f = 0;
    empID = parseInt(empID);
    const url = 'https://www.jsonkeeper.com/b/SKCJ';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            for (e of data["Employees"]) {
                if (e["empID"] == empID) {
                    console.log("First Name: " + camelCase(e["firstName"]));
                    console.log("Last Name: " + camelCase(e["lastName"]));
                    console.log("Salary: " + e["sal"]);
                    f = 1;
                }
            }

            if (f == 0) console.log("Employee Not Found!");
        })
        .catch(error => {
            console.error('Error:', error);
        });

    rl.close();
});
