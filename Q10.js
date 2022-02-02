const prompt = require ("prompt-sync")();

const MIN_CHARGE = 150;
const HOURLY_RATE = 100;
const hoursWorked = parseFloat(prompt("Enter the number of hours needed for the repair: "));
const costForParts = parseFloat(prompt("Enter the cost of the parts needed for the repair: $"));
const charge = (hoursWorked * HOURLY_RATE) + costForParts;

charge <= MIN_CHARGE ? console.log(`****MINIMUM REPAIR COST: $${MIN_CHARGE}****\n`) : console.log(`****REPAIR COST: $${charge}****\n`)