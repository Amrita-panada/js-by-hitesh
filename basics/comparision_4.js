console.log("2" > 1);
console.log("02">1); //type script-restrict

console.log(null>= 0); //true
console.log(null==0); //false
console.log(null<= 0);

console.log(undefined>= 0);
console.log(undefined== 0);
console.log(undefined< 0);

// === strict check

console.log('2'===2); //false
const id=Symbol("123")
const id2=Symbol("123")
console.log(id===id2);//false

const bignum= 2342514564343536n // representing bigint

const heros=['a','b','c'];
let myobj={
    name: 'ami',
    age:22,
}

const myfun= function() {
    console.log(typeof bignum);
}
