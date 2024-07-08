//stack(premitive) and heap(non-primitive)
let myName="amrita"
let another=myName
console.log(another);

another="siba"

console.log(another);
console.log(myName);

let userOne={
    email: "amrita987.com",
    upi:"user@123"
}

let userTwo=userOne   //reference
console.log(userTwo);

userTwo.email = "siba123@.com"

console.log(userOne);
console.log(userTwo);