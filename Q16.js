const prompt = require("prompt-sync")();

console.log("\n**** WELCOME TO THE STUDENT GRADE ALLOCATOR ****");
console.log("\n")

const studentName = prompt("Please enter the student's name: ");
const studentID = parseInt(prompt("Please enter the student's ID number: "));
const studentScore = parseFloat(prompt("Please enter the student's exam score out of 100: "));

if(isNaN(studentID) || (studentScore)===true)
{
    console.log("\n**** ERROR: Please enter a valid ID. **** \n");
}

if(isNaN(studentScore)===true)
{
    console.log("\n**** ERROR: Please enter a valid score. **** \n");
}

if (studentScore>=90)
{
    console.log(`\n**** ${studentName} | ${studentID} | ****`);
    console.log(`**** GRADE: A ****\n`)
}

else if (studentScore>=80 && studentScore<=89.9)
{
    console.log(`\n**** ${studentName} | ${studentID} | ****`);
    console.log(`**** GRADE: B ****\n`)
}

else if (studentScore>=70 && studentScore<=79.9)
{
    console.log(`\n**** ${studentName} | ${studentID} | ****`);
    console.log(`**** GRADE: C ****\n`)
}

else if (studentScore>=60 && studentScore<=69.9)
{
    console.log(`\n**** ${studentName} | ${studentID} | ****`);
    console.log(`**** GRADE: D ****\n`)
}
else if (studentScore<60)
{
    console.log(`\n**** ${studentName} | ${studentID} | ****`);
    console.log(`**** GRADE: F ****\n`)
}