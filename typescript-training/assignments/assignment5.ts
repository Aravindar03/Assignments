let empName: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000.0, 68000.0, 82000.0, 90000.0, 60000.0];
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let rating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5]
let hikeArray: (string | number)[] = [];
let variablePayPercentage: number = 0;
let bonus:number=0;
let reward:number=0;
let hike: number=0;
let hikePercentage: string;
let hikePercentageMap: Map<string, string> = new Map();


for (let i = 0; i < empName.length; i++) {
    if (rating[i] >= 4) {

        variablePayPercentage=15;
        bonus=1500
    }
    else if (rating[i] >= 3 && rating[i] < 4) {
        variablePayPercentage=10;
        bonus=1200;

    }
    else if (rating[i] < 3) {
        variablePayPercentage=3;
        bonus=300;

    }
    if (experience[i] >= 5) {
        reward=5000;

    }

    hike=(baseSalary[i]*variablePayPercentage)/100 +bonus+reward;
    hikePercentage=Number((hike/baseSalary[i])*100).toFixed(2);
    hikePercentageMap.set(`${empName[i]}`,`${hikePercentage} %`);
  
}
  console.log(hikePercentageMap);
