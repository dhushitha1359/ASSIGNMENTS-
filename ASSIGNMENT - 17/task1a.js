const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the number: ", function(input) {
  let num = Number(input);

  if (num > 0) {
    console.log("The number is positive");
  } else if (num == 0) {
    console.log("The number is Zero");
  } else {
    console.log("The number is negative");
  }

  console.log(num);
  rl.close();
});




