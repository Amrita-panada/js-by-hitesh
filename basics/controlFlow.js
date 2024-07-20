//if (3>2) console.log("amrita");

/*if (3>2) console.log("amrita"),console.log("aman");
do not write code like this way*/
    
//Falsy Value
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//True values
// "0","false"," ",[],{},funtion(){}

//How to check a arr
let user=[1,2,3,4];
if (user.length===0){
    console.log("empty array");
}

//how to check object
const emptyObj={};
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

/*IMPORTANT
NULLISH COALESCING OPERATOR (??): NULL UNDEFINED

let val1;
val1 = 5 ?? 10  ans-> 5
val2 = null ?? 10  ans->10
val3 = undefined ?? 15 ans->15
val4 = null ?? 10 ?? 20

*/

/*TERNIARY OPERATOR
condition ? true : false

*/
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}