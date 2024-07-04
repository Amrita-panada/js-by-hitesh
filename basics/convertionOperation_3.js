let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33
//"33abc" =>NaN
//true =>1; false =>0
// "" =>false , "any value" => true

let isLoggedIn= 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//********operations******* */

let value =3
let negValue= -value
console.log(negValue); //-3
console.log('2'+2); //22 ,it convert every num to string
console.log(true); //true
console.log(+true); //1
console.log(+""); //0

let game=100
game++;
console.log(game); //101