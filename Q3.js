const prompt = require ("prompt-sync")();

const age= parseInt(prompt("Please enter your age: "));

age <= 18 ? console.log("You are too young to go beyond this point.") : console.log("You have been granted access");