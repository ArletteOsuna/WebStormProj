let prompt = require('prompt-sync')();
let width, length, perimeter, area;

width = prompt('How wide is the rectangle?');
length = prompt('how long is the rectangle?')
perimeter = (width * 2) + (length * 2);
area = width * length;
console.log(`the perimeter is ${perimeter}`);
console.log(`the area is ${area}`);

