let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
let totalMark: number = 0;
let averageMark: number = 0;


console.log("Updated marks:");

for (let i = 0; i < studentMarks.length; i++) {
    updatedMarks[i] = studentMarks[i] + 10;
    totalMark = totalMark + updatedMarks[i];
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);

}
averageMark = totalMark / updatedMarks.length;
console.log(`Average marks ${averageMark}`);







