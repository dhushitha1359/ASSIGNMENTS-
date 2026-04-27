//QUESTION - 1
const add = (a,b) => {
    console.log(a+b)
};
add(2,3);

const addShort = (a, b) => a + b;
console.log(addShort(4,5));

const result = addShort(4, 6);
console.log(result);

//QUESTION - 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    introduce() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    }
}

// Creating object
const person1 = new Person("John", 20);

// Calling method
person1.introduce();
