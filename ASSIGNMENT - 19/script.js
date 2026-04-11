function add(a,b){
    return(a+b);
}
console.log(add(5,5));

function multiply(a,b){
    return (a*b);
}
console.log(multiply(6,3));

const subtract = (a,b) => {
    return( a - b);
};
console.log(subtract(10,4));

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Dhushitha"));

let globalVar = "I am global";

function scopeExample() {
    let localVar = "I am local";
    
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeExample();

console.log(globalVar); // Accessible
// console.log(localVar); // ❌ Error: localVar is not defined

