let transactionHistory: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000]
let creditCounter: number = 0;
let debitCounter: number = 0;
let creditAmount: number = 0;
let debitAmount: number = 0;
let accountBalance: number = 0;
let suspiciousTransactionCounter: number = 0;
let suspiciousTransactionArray: number[] = [];

for (let i = 0; i < transactionHistory.length; i++) {
    if (transactionHistory[i] >= 0) {
        creditCounter += 1;
        creditAmount += transactionHistory[i];

        if (transactionHistory[i] > 10000) {
            suspiciousTransactionCounter += 1
            console.log(`Suspicious credit/debitTransaction: ${transactionHistory[i]}`)

        }

    }


    else if (transactionHistory[i] < 0) {
        debitCounter += 1;
        debitAmount += transactionHistory[i];

        if (transactionHistory[i] < -10000) {

            suspiciousTransactionCounter += 1
            console.log(`Suspicious credit/debitTransaction: ${transactionHistory[i]}`)



        }

    }


}
console.log(`Total suspicious transactions: ${suspiciousTransactionCounter}`)
console.log(`Total credit transactions: ${creditCounter}`);
console.log(`Total debit transactions: ${debitCounter}`);
console.log(`Total credit amount: ${creditAmount}`);
console.log(`Total debit amount: ${debitAmount}`);

accountBalance = creditAmount + debitAmount;
console.log(`Account Balance: ${accountBalance}`);



