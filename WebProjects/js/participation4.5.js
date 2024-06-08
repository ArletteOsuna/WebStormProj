let prompt = require('prompt-sync')();

let string = prompt("Enter a string: ");
guess = Number(prompt("Enter the number of characters to extract: "));

function extract (string,guess){
    let newString = string.substr(0,guess);
    return newString;
}

stringNew = extract(string,guess);
console.log(`The extracted string is "${stringNew}"`)