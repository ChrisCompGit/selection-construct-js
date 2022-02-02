const prompt = require ("prompt-sync")();

const MIN_CHARGE = 150;
const HOURLY_RATE = 100;
const hoursWorked = parseFloat(prompt("Enter the number of hours needed for the repair: "));
const costForParts = parseFloat(prompt("Enter the cost of the parts needed for the repair: $"));
const charge = (hoursWorked * HOURLY_RATE) + costForParts;

if(isNaN(hoursWorked)===true)
{
    console.log("****ERROR: Please enter a valid duration for the repair.****");
}

if(isNaN(costForParts)===true)
{
    console.log("****ERROR: Please enter a valid cost for the repair parts.****");
}

if(hoursWorked<=0)
{
    console.log("****ERROR: The minimum number of hours for any repair is 1.****");
}

if(costForParts<=0)
{
    console.log("****ERROR: The minimum cost of repair parts is $0.01.****");
}

if(charge <= MIN_CHARGE && isNaN(costForParts)===false && isNaN(hoursWorked)===false)
{
    console.log(`****MINIMUM REPAIR COST: $${MIN_CHARGE}****`)
    console.log("\n");
}
else
{
    console.log(`****REPAIR COST: $${charge}****`)
    console.log("\n");
}