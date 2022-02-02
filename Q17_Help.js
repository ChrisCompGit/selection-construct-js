const prompt = require("prompt-sync")();


const num1 = prompt("Please enter the first pair of numbers separated by a space: ");
const num1First = parseFloat(num1.slice(" "));
const num1Second = parseFloat(num1.slice(" "));
const fraction1 = num1First / num1Second;

const num2 = prompt("Please enter the second pair of numbers separated by a space: ");
const num2First = parseFloat(num2.split(` `));
const num2Second = parseFloat(num2.split(` `));
const fraction2 = num2First / num2Second;

console.log(`${num1}`);
console.log(`${num1First}`);
console.log(`${num1Second}`);
console.log(`${num2}`);
console.log(`${num2First}`);
console.log(`${num2Second}`);
console.log(`${fraction1}`);
console.log(`${fraction2}`);