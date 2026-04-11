let person = {
    name: "Dhushitha",
    age: 21,
    
    sayHello: function() {
        return "Hello!";
    }
};
console.log(person.name); // Dhushitha
console.log(person.age);  // 21

person.age = 22;  // changing age

console.log(person.age); // 22

console.log(person.sayHello()); // Hello!

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);