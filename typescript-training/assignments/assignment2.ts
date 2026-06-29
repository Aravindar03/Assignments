let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

console.log(`Checking loan eligibility for ${customerName}`);
loanEligibility(customerName, creditScore, income, isEmployed, debtToIncomeRatio)


function loanEligibility(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number) : void {
    if (creditScore >= 750) {
        console.log(`Credit socre check passed, so the loan is approved for ${customerName}`);
    }
    else if (creditScore >= 650 && creditScore < 750) {
        if (income >= 50000) {

            if (isEmployed) {

                if (debtToIncomeRatio < 40) {
                    console.log(`All loan elibility criterias are satisfied, the loan is approved for ${customerName}`);
                }
                else {
                    console.log(`Dti ratio check failed, the loan is declined for ${customerName}`)
                }
            }
            else {
                console.log(`Customer is unemployed, the loan is declined for ${customerName}`);
            }

        }
        else {
            console.log(`Income check failed, the loan is declined for ${customerName}`)
        }
    }

    else {
        console.log(`Credit socre check failed, so the loan is declined for ${customerName}`);
    }
}