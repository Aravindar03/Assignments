
 interface empDetails {
    "name": string,
    "id": number,
    "role": string,
    "email"?:string,
    "address": {
        "city": string,
        "district": string,
        "pincode"?: number
    }
}

let details: empDetails= {
    "name":"Aravind",
    "id": 1234,
    "role": "Tester",
    "address": {
        "city":"Karamana",
        "district":"Tvm",
        "pincode":1234
    }
}

//console.log(details.name);
//console.log(details.address["city"]);
details.email="aravindar03@gmail.com"
console.log(details)

let keys=Object.keys(details);
console.log(keys);

let values=Object.values(details);
console.log(values);


let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

console.log(numbers[0]);
console.log(fruits[2]);
fruits.push("grapes")
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.unshift("guava")
console.log(fruits)
fruits.shift()
console.log(fruits)

let numberIndex= fruits.indexOf("apple");
console.log(numberIndex);


let names: string []=["Aravind", "Sanal", "Sidarth", "Ajith", "Nithin"]
//names.splice(2,0,"Chentil");
//let devs: string[]=[];
//devs=names.slice(1,4)
//console.log(devs);

for(let name of names){
    console.log(name)
}

let filteredNumbers=numbers.filter((num) =>num>=2)
console.log(filteredNumbers);

let addedArray=numbers.map((num) => num+10)
console.log(addedArray);