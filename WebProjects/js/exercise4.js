let prompt = require('prompt-sync')();
let item, amount, total, tax, grandtotal;

item = prompt('What is the number of items?');
amount = prompt('What is the price of each?');
total = item * amount;
tax = total * .0625;
grandtotal = total + tax;
console.log(`The amount you owe is $${grandtotal}`);