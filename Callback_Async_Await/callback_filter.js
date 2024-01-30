const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 28 },
  ];
  
  function sendGreeting(person) {
    console.log(`Hello, ${person.name}!`);
  }
  
  const filteredPeople = people.filter((person) => person.age >= 30);
  filteredPeople.forEach(sendGreeting);
  