const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Please enter a number: "));
const num2 = parseInt(prompt("Please enter another number: "));
const integerCode = parseInt(prompt("Please enter an Integer Code: "));

switch(integerCode)
{
    case 1:
        const sum=num1+num2;
        console.log(`\nUsing Interger Number 1, the sum of ${num1} and ${num2} is ${sum}`)
    break;
    case 2:
        const difference=num1-num2;
        console.log(`\nUsing Interger Number 2, the difference between ${num1} and ${num2} is ${difference}`)
    break;
    case 3:
        const product=num1*num2;
        console.log(`\nUsing Interger Number 3, the product of ${num1} and ${num2} is ${product}`)
    break;
    case 4:
        const quotient=num1/num2;
        console.log(`\nUsing Interger Number 4, the quotient of ${num1} and ${num2} is ${quotient}`)
    break;
    default:
}
if(integerCode<1 || integerCode>4)
{
    console.log("\n***ERROR: Please use one of the following integer values to do the following calculations: \n '1' to add the 2 numbers \n '2' to subtract the 2 numbers \n '3' to multiply the 2 numbers \n '4' to divide the 2 numbers\n");
}