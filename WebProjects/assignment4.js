const prompt = require('prompt-sync')();

console.log("===== Input Commuting Costs =====");

// Prompt for the daily round trip in miles, the number of days per month, and the monthly parking cost
const milesPerDay = parseFloat(prompt("What is your daily round trip? "));
const daysPerMonth = parseFloat(prompt("How many days per month do you commute? "));
const parkingCostPerMonth = parseFloat(prompt("How much do you pay for parking per month? "));

// Compute the monthly and annual commuting costs
const costPerMile = 0.8236;
const monthlyCommuteCost = (milesPerDay * 2 * daysPerMonth * costPerMile) + parkingCostPerMonth;
const yearlyCommuteCost = monthlyCommuteCost * 12;

// Output the results
console.log("\n===== Cost of Commuting =====");
console.log(`Your estimated monthly cost of commuting is $${monthlyCommuteCost.toFixed(2)}`);
console.log(`Your estimated yearly cost of commuting is $${yearlyCommuteCost.toFixed(2)}`);
