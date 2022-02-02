const prompt = require ("prompt-sync")();

const quiz1 = parseInt(prompt("Please enter your Quiz 1 results: "));
const quiz2 = parseInt(prompt("Please enter your Quiz 2 results: "));
const quiz3 = parseInt(prompt("Please enter your Quiz 3 results: "));

//valid number test
if(isNaN(quiz1)===true)
{
    console.log("Please enter a valid test result for Quiz 1.");
    console.log("\n");
}
if(isNaN(quiz2)===true)
{
    console.log("Please enter a valid test result for Quiz 2.");
    console.log("\n");
}
if(isNaN(quiz3)===true)
{
    console.log("Please enter a valid test result for Quiz 3.");
    console.log("\n");
}

//calculations
if(isNaN(quiz1)===false && isNaN(quiz2)===false && isNaN(quiz3)===false)
{
    const result = (quiz1 + quiz2 + quiz3)/3;

    if(result>=50)
    {
        console.log("********Pass********")
        console.log("\n");
    }
    else
    {
        console.log("********Fail********")
        console.log("\n");
    }
}