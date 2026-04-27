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