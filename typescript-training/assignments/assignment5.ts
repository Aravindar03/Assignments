let empName: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0];
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let rating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5]
let hikeArray: (string | number)[] = [];
let variablePay: number = 0;
let hikePercentage: string;
let hike: number;

let salaryMap: Map<string, string> = new Map();


for (let i = 0; i < empName.length; i++) {
    if (experience[i] < 5 && rating[i] >= 4) {

        variablePay = (baseSalary[i] * 15) / 100;
        hike = variablePay + 1500;
        hikePercentage = Number((hike / baseSalary[i]) * 100).toFixed(2);
        salaryMap.set(empName[i], hikePercentage);

    }
    else if (experience[i] >= 5 && rating[i] >= 4) {
        variablePay = (baseSalary[i] * 15) / 100;
        hike = variablePay + 1500 + 5000;
        hikePercentage = Number((hike / baseSalary[i]) * 100).toFixed(2);
        salaryMap.set(empName[i], hikePercentage);

    }
    else if (experience[i] < 5 && rating[i] >= 3 && rating[i] < 4) {
        variablePay = (baseSalary[i] * 10) / 100;
        hike = variablePay + 1200;
        hikePercentage = Number((hike / baseSalary[i]) * 100).toFixed(2);
        salaryMap.set(empName[i], hikePercentage);

    }
    else if (experience[i] >= 5 && rating[i] >= 3 && rating[i] < 4) {
        variablePay = (baseSalary[i] * 10) / 100;
        hike = variablePay + 1200 + 5000;
        hikePercentage = Number((hike / baseSalary[i]) * 100).toFixed(2);
        salaryMap.set(empName[i], hikePercentage);

    }
    else if (experience[i] < 5 && rating[i] < 3) {
        variablePay = (baseSalary[i] * 3) / 100;
        hike = variablePay + 300;
        hikePercentage = Number((hike / baseSalary[i]) * 100).toFixed(2);
        salaryMap.set(empName[i], hikePercentage);

    }
    else if (experience[i] >= 5 && rating[i] < 3) {
        variablePay = (baseSalary[i] * 3) / 100;
        hike = variablePay + 300 + 5000;
        hikePercentage = Number((hike / baseSalary[i]) * 100).toFixed(2);
        salaryMap.set(empName[i], hikePercentage);

    }

}
console.log(salaryMap);
