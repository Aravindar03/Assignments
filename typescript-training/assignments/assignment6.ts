let isPrime: boolean = true;

function isPrimeNumber(caseNumber: number): void {

    if (caseNumber <= 1) {
        console.log(`${caseNumber} is not a prime number`);
    }
    else {
        for (let i = 2; i < caseNumber; i++) {
            if (caseNumber % i == 0) {
                isPrime = false;
                console.log(`${caseNumber} is not a prime number`);
                break;
            }

        }
        if (isPrime == true) {
            console.log(`${caseNumber} is a prime number`);
        }
    }
}

isPrimeNumber(7);
isPrimeNumber(25);
isPrimeNumber(1)
