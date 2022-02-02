const prompt = require ("prompt-sync")();

const num1 = parseFloat(prompt("Please enter one number: "));
const num2 = parseFloat(prompt("Please enter another number: "));

if(isNaN(num1)===true)
{
    console.log("Please enter a valid first number.");
}

if(isNaN(num2)===true)
{
    console.log("Please enter a valid second number.");
}

//Calculations
if(num2>0 && isNaN(num1)===false && isNaN(num2)===false)
{
    const quotient = num1 / num2;
    console.log(`The quotient of ${num1} over ${num2} is ${quotient.toFixed(2)}`)
    console.log("\n");
}
else if(num2<=0)
{
    console.log("The second number you entered cannot be 0 or a negative number.");
    console.log("Try again \n");
}
