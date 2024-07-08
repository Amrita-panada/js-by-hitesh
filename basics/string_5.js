const name ="amrita"
const repocount= 30

//console.log(name+repocount+"value"); OLD style

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName=new String("siba sahu") //object
/*console.log(gameName);
console.log(gameName[1]);
console.log(gameName.__proto__); // READ STRING METHODS BY OWN

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));*/
/*console.log(gameName.indexOf('a'));

//subString
const newString= gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,2) // doubt
console.log(anotherString);

const newstring3="  amrita  "
console.log(newstring3);
console.log(newstring3.trim());*/

const url="https://amrita.com/sibaLove%20Amrita"

console.log(url.replace("%20","%80"))

console.log(url.includes("siba"));

console.log(gameName.split('-'));
