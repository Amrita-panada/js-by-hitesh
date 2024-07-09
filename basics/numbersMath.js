const score=400
console.log(score);

const balance=new Number(100) //here specificly number object define
console.log(balance);

console.log(balance.toString);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal 2 point

const otherNum1=23.8966
console.log(otherNum1.toPrecision(3)); //IMP 

const otherNum2=123.8966
console.log(otherNum2.toPrecision(3));

const otherNum3=1123.8966
console.log(otherNum3.toPrecision(3));

const otherNum4=1000000
console.log(otherNum4.toLocaleString()); //us number system

const otherNum5=1000000
console.log(otherNum5.toLocaleString('en-IN')); //indian num sys


// ********** MATH **************

console.log(Math)
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.345));
console.log(Math.ceil(4.345));
console.log(Math.floor(4.345));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

//how to set limit
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min + 1))+min); //IMP