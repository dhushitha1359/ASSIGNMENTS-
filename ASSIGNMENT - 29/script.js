// 1. SYNCHRONOUS
console.log("Start");

console.log("Middle");

console.log("End");

//ASYNCHRONOUS
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");

//2
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

//3
let count = 1;

const intervalId = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(intervalId);
    }
}, 1000);