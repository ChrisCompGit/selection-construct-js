const prompt = require("prompt-sync")();

const weight1KG = parseInt(prompt("Please enter the Kilograms for the first weight: "));
const weight1G = parseInt(prompt("Please enter the Grams for the first weight: "));

const weight2KG = parseInt(prompt("Please enter the Kilograms for the second weight: "));
const weight2G = parseInt(prompt("Please enter the Grams for the second weight: "));


if(isNaN(weight1KG)===true)
{
    console.log("Please enter a valid weight.");
    console.log("\n");
}
if(isNaN(weight1G)===true)
{
    console.log("Please enter a valid weight.");
    console.log("\n");
}
if(isNaN(weight2KG)===true)
{
    console.log("Please enter a valid weight.");
    console.log("\n");
}
if(isNaN(weight2G)===true)
{
    console.log("Please enter a valid weight.");
    console.log("\n");
}
else
{
    const totalKGs = weight1KG + weight2KG;
    const totalGs = weight1G + weight2G;
    console.log(`Your total weight is: ${totalKGs}KG and ${totalGs}G`);
}