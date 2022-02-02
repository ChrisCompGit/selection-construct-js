const prompt = require ("prompt-sync")();

const num = parseInt(prompt("Please enter a Number: "));

if(isNaN(num)===true)
{
    console.log("Please enter a valid whole number.");
    console.log("\n");
}
else if(num%2==0 && isNaN(num)===false)
{
    console.log(`${num} is an even number`);
    console.log("\n");
}
else
{
    console.log(`${num} is an odd number`);
    console.log("\n");
}