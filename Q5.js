const prompt = require ("prompt-sync")();

const num = parseInt(prompt("Please enter an Integer: "));

if(isNaN(num)===true)
{
    console.log("Please enter a valid integer/whole number.");
    console.log("\n");
}
else if(num===0)
{
    console.log(`${num} is neither a negative nor positive integer`);
    console.log("\n");
}
else if(num>0 && isNaN(num)===false)
{
    console.log(`${num} is a positive integer`);
    console.log("\n");
}
else
{
    console.log(`${num} is a negative integer`);
    console.log("\n");
}
