//ARRAY DESTRUCTION
let arr = [10,20,30];
let [a,b,c] = arr;
console.log("a = " + a);
console.log(b);
console.log(c);

//OBJECT DESTRUCTURING
let person = {
    name: "Sara",
    age: 21
};

// extract values
let {name, age} = person;

console.log(name); // Sara
console.log(age);  // 21

//SPREAD OPERATOR
let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2);

//REST OPERATOR
function sum(...numbers){
    console.log(numbers);
}

sum(1, 2, 3, 4);