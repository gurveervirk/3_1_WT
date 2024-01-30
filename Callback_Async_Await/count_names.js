const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Name2', age: 22 },
    { name: 'David', age: 35 },
    { name: 'Name1', age: 28 },
  ];
  
  n = 0

  function sendGreeting(person) {
    if (person.name.startsWith("N")) {
        n++;
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(person.name);
          resolve();
        }, 1000);
      });
    } else {
      return Promise.resolve();
    }
  }
  
  async function sendGreetings() {
    for (const person of people) {
      await sendGreeting(person);
    }
    console.log("No of people having N as start:", n);
  }
  
  sendGreetings();
  