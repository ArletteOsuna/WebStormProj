let prompt = require('prompt-sync')();

function displaySub(num1, num2) {
    var total = num1 - num2;
    console.log(`The first number ${num1} minus the second number ${num2} is ${total}`);
}

num1 = prompt("Enter the first number: ")
num2 = prompt(("Enter the second number: "))
num1 = Number(num1);
num2 = Number(num2);
displaySub(num1,num2);
