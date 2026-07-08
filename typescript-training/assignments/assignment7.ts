let sentence: string = "Java programming is fun and challenging";
console.log(`Original string: ${sentence}`);
let splitString: string[] = sentence.split(" ");
//console.log(splitString);
console.log(`Total number of words in the string: ${splitString.length}`);
let finalStringArray: string[] = [];
let finalWord: string = "";

let reverseSentence: string = "";
for (let i = splitString.length - 1; i >= 0; i--) {
    reverseSentence += splitString[i] + " ";

}
console.log(`Reverse string: ${reverseSentence}`);

for (let i = 0; i < splitString.length; i++) {
    finalStringArray[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);

}
for (let word of finalStringArray) {

    finalWord = finalWord + word + " ";

}
console.log(`String with first letter of each word capitalized: ${finalWord}`);