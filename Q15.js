const prompt = require("prompt-sync")();

const RATE_UNDER_25000 = 0.05;
const FIXED_FEE_BETWEEN_25000_AND_49999 = 1250;
const ALLOWANCE_BETWEEN_25000_AND_49999 = 25000;
const RATE_BETWEEN_25000_AND_49999 = 0.1;
const FIXED_FEE_BETWEEN_50000_AND_100000 = 5000;
const ALLOWANCE_BETWEEN_50000_AND_100000 = 50000;
const RATE_BETWEEN_50000_AND_100000 = 0.25;

const loanAmount = parseFloat(prompt("Please enter the amount to be borrowed: $"));

if(isNaN(loanAmount)===true)
{
    console.log("\n**** ERROR: Please enter a valid amount. ****");
    console.log("\n");
}


else if (loanAmount<0 && isNaN(loanAmount)===false)
{
    console.log("\n**** ERROR: Your loan cannot be a negative number. ****");
    console.log("\n");
}


else if (loanAmount >= 0 && loanAmount < 25000 && isNaN(loanAmount)===false)
{
    const depositForLoanLessThan25000 = RATE_UNDER_25000 * loanAmount;
    console.log(`\n***** Loan Amount: $${loanAmount} ****`);
    console.log(`\n**** Required Deposit: $${depositForLoanLessThan25000} ****\n`);
}


else if (loanAmount>=25000 && loanAmount<50000 && isNaN(loanAmount)===false)
{
    const depositForLoanBetween25000And49999 = FIXED_FEE_BETWEEN_25000_AND_49999 + RATE_BETWEEN_25000_AND_49999*(loanAmount-ALLOWANCE_BETWEEN_25000_AND_49999);
    console.log(`\n***** Loan Amount: $${loanAmount} ****`);
    console.log(`\n**** Required Deposit: $${depositForLoanBetween25000And49999} ****\n`);
}


else if (loanAmount>=50000 && loanAmount<=100000)
{
    const depositForLoanBetween50000And100000 = FIXED_FEE_BETWEEN_50000_AND_100000 + RATE_BETWEEN_50000_AND_100000*(loanAmount-ALLOWANCE_BETWEEN_50000_AND_100000);
    console.log(`\n**** Loan Amount: $${loanAmount} ****`);
    console.log(`\n**** Required Deposit: $${depositForLoanBetween50000And100000} ****\n`)
}


else
{
    console.log("\n**** ERROR: We do not lend over $100,000. ****\n");
}