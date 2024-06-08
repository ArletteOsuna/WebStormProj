let prompt = require('prompt-sync')();
let radius, circumference, area;
let pi = 3.14159

radius = prompt('What is the radius?');
circumference = 2 * pi * radius;
area = pi * radius**2;
console.log(`The circumference is: ${circumference.toFixed(3)}`);
console.log(`The area is: ${area.toFixed(3)}`);
