const prompt = require("prompt-sync")();

const AGE_REDUCTION = 5;

const name = prompt("Hi, what's your name?: ");
console.log(`Welcome to our show, ${name}`);

const age = prompt("How old are you?: ");

    if(age<1)
    {
        console.log("This is not a valid age");
        console.log("End of Program");
        console.log("\n");
    }
    else if (isNaN(age)===true)
    {
        console.log("The number entered is not a valid age");
        console.log("End of Program");
        console.log("\n");
    }
    else if (age>=1 && age<22)
    {
        console.log("Sorry, you are not allowed to continue");
        console.log("End of Program");
        console.log("\n");
    }
    else if (age>=22)
    {
        const mamaguyAge = age - AGE_REDUCTION;
        console.log(`Hmmm, you don't look a day over ${mamaguyAge}`);
        const noOfCars = prompt(`Tell me, ${name}, how many cars do you own?: `);
        
        if(noOfCars==0)
        {
            console.log(`Wow, come on now ${name}, you are ${age} and do not own a car!`);
        }
        else if(noOfCars>=1)
        {
            const brand = prompt(`${name}, what is the brand and model of your car?: `);
            console.log(`The ${brand} is a great choice for a car`)
            console.log(`${name}, have a great day. Good Bye!!`)
        }
    }
