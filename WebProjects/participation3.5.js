let prompt = require('prompt-sync')();

let number = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("Guess a number between 1 and 100: "));

while (guess !== number){
    if (guess < number){
        console.log("Your guess is too low");
        guess = Number(prompt("Guess a number between 1 and 100: "));
    }
    else if (guess > number) {
        console.log("Your guess is too high");
        guess = Number(prompt("Guess a number between 1 and 100: "));
    }
    else{
        break;
    }
}

console.log("Your guess is correct");
