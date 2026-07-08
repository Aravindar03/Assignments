let sentenceString: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let sentenceSplitArray: string[] = sentenceString.split(" ")
//console.log(sentenceSplitArray);
let count: number = 0;
for (let word of sentenceSplitArray) {
    if (word.toLowerCase() == "java") {
        count++;
    }

}
console.log(`Java word count is: ${count}`);
let indexes: string = "";
for (let i = 0; i < sentenceSplitArray.length; i++) {
    if (sentenceSplitArray[i].toLowerCase() == "java") {
        indexes += `${i}, `

    }

}
console.log(`Java word indexes: ${indexes}`);
