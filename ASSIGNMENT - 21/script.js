const number = [2,3,4,5];
const newArr = number.map(myFunction)
function myFunction(num){
    return num*2;

}
console.log(newArr);

const number1 = [1,2,3,4,5,6,7,8,9,10];
const newArr1 = number1.filter(fill)
function fill(num1){
    return num1 % 2 ==0;
}
console.log(newArr1)

let arr6 = [1, 2, 3, 4];

let sum = arr6.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum); 

let arr5 = [5, 8, 12, 20, 3];

let result = arr5.find(function(num) {
    return num > 10;
});

console.log(result); 

let arr7  = [10, 20, 30];

let check = arr7.includes(20);

console.log(check); 

