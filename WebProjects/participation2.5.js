let prompt = require('prompt-sync')();
function convert(digit,dec){
    let answer = digit.toFixed(dec);
    return answer;
}

let digit = Number(prompt("Enter a number: "));
let dec = Number(prompt("Enter number of decimal places: "))
result = convert(digit,dec);
console.log(`The number ${digit} with ${dec} places is ${result}`)