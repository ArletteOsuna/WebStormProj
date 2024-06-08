let prompt = require('prompt-sync')();
let beef, beyondBeef, double, triple, cheese, bacon, avocado, chili, fries, onionRings, totalOrder;
let burgerChoice, pattyChoice, toppingChoice, cheeseChoice, baconChoice, avocadoChoice, chiliChoice, sidesChoice;

beef = 5.75;
beyondBeef = 6.25;
double = 2.00;
triple = 3.50;
cheese = 0.50;
bacon = 1.25;
avocado = 0.75;
chili = 2.50;
fries = 2.00;
onionRings = 2.25;
totalOrder = 0;

console.log(`* * * Welcome to Benny's Burger * * `);
burgerChoice = prompt( `Please choose beef (B) or beyond beef(Y):` );
    while (burgerChoice !== 'B' && burgerChoice !== 'b' && burgerChoice !== 'y' && burgerChoice !== 'y'){
        burgerChoice = prompt( `Please choose beef(B) or beyond beef(Y): `)}
pattyChoice = prompt( `Would you like to make it a double(D) or triple(T)? or N: `);
toppingChoice = prompt( `Would you like to add toppings? (Y or N): `);
if (toppingChoice === "y" || toppingChoice === "y") {
    {
        cheeseChoice = prompt(`Would you like cheese? (Y or N): `)
    }
    {
        baconChoice = prompt(`Would you like bacon? (Y or N): `)
    }
    {
        avocadoChoice = prompt(`Would you like avocado? (Y or N): `)
    }
    {
        chiliChoice = prompt(`Would you like chili (Y or N): `)
    }
}
sidesChoice = prompt(`Would you like Fries(F) or Onion Rings(R)? or N: `)
    console.log("========== Your Order ==========");

if (burgerChoice === "B" || burgerChoice === "b") {
    console.log(`Beef Burger               $${beef.toFixed(2)}`)
    totalOrder += beef;
}
    else if (burgerChoice === "Y" || burgerChoice === "y"){
    console.log(`Beyond Beef Burger            $${beyondBeef.toFixed(2)}`)
    totalOrder += beyondBeef;
}
if (pattyChoice === "D" || pattyChoice === "d"){
    console.log(`Double                    $${double.toFixed(2)} `)
    totalOrder += double;
}
else if(pattyChoice === "T" || pattyChoice === "t"){
    console.log(`Triple                      $${triple.toFixed(2)} `)
    totalOrder += triple;
}
if (cheeseChoice === "Y" || cheeseChoice === "y") {
    console.log(`Cheese                       $${cheese.toFixed(2)} `)
    totalOrder += cheese;
}
if (avocadoChoice === "Y" || avocadoChoice === "y") {
    console.log(`Avocado                      $${avocado.toFixed(2)} `)
    totalOrder += avocado;
}
if (chiliChoice === "Y" || chiliChoice === "y") {
    console.log(`chili                     $${chili.toFixed(2)} `)
    totalOrder += chili;
}
if (sidesChoice === "F" || sidesChoice === "f"){
    console.log(`Fries                     $${fries.toFixed(2)} `)
    totalOrder += fries;
}
else if(sidesChoice === "R" || sidesChoice === "r") {
    console.log(`Onion Rings                $${onionRings.toFixed(2)} `)
    totalOrder += onionRings;
}
console.log(`================================`);
console.log(`Order Total:                  $${totalOrder.toFixed(2)}`);

