const prompt = require("prompt-sync")();

const main = (()=>{

    for(let i=1; i<6; i++)
    {
        console.log(`Question ${i}`)
        const side1 = prompt("Please enter the length of side 1: ");
        const side2 = prompt("Please enter the length of side 2: ");
        const side3 = prompt("Please enter the length of side 3: ");

        if(isNaN(side1)===true || (side2)===true || (side3)===true)
        {
            console.log("\n**** ERROR: You did not enter a number. ****");
            console.log("\n");
        }
        
        else if(side1 <= 0 || side2 <= 0 || side3 <= 0)
        {
            console.log("\n**** ERROR: Please enter a valid length. ****\n");
        }

        else if(side1 === side2 && side1 === side3 && side2 === side3)
        {
            console.log("This is an Equilateral Triangle. All sides are equal length and meet at 60 degree Acute angles.\n");
        }

        else if((side1 === side2 || side1 === side3) && (side2 === side1 || side2 === side3))
        {
            console.log("This is an Isosceles Triangle with 2 equal sides and angles.\n");
        }
             
        else if(side1 !== side2 && side1 !== side3 && side2 !== side3)
        {
            console.log("This is a Scalene Triangle, i.e. no equal sides.\n");
        }
    }
    
})();
