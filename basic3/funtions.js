function myName(){
   console.log("A");
   console.log("B");
   console.log("C");
   console.log("D");
   console.log("E");
   console.log("F");
}

//myName()  //basic execution

/*function addTwoNum(num1,num2) {
    console.log(num1+num2);
}

addTwoNum(3,5)*/

/*function addTwoNum(num1,num2) {
    console.log(num1+num2);
}

const result=addTwoNum(3,5)
console.log("result:",result); */ //undefined because funtion not returning anything

/*function addTwoNum(num1,num2) {
    result=num1+num2;
    return result
}
const res=addTwoNum(5,7)    
console.log("result:",);*/

function loginUser(usrename) {
    if (usrename===undefined){
        console.log("please enter username");
        return
    }
    return `${usrename} just logged in`
}

//console.log(loginUser("amrita"));

//console.log(loginUser());

/*function calculateCart(...num1) {  //this is use for where num arguments not fixed
    return num1
}

console.log(calculateCart(200,400,300));*/

function calculateCart(ch1,ch2,...num1) {  //this is use for where num arguments not fixed
    return num1
}

console.log(calculateCart(400,200,300,1000));

//object in funtion

const user={
    username:"amrita",
    price:199
}

function handelObject(anyobject){
    console.log(`userName is ${anyobject.username} and 
    price is ${anyobject.price}`);
}

//handelObject(user)

/*handelObject({
    username:"sam",
    price:399
})*/

//Array in funtion
const myNewArr=[200,300,100,500]

function handleArray(getArr) {
    return getArr[1]
}

console.log(handleArray(myNewArr));

//ARROR FUNTION
const user1={
    username:"hitesh",
    prices:999,

    welcome:function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
      //this-> referes current content

}

user.welcome()
user.username="aman"
user.welcome()

console.log(this);

/*function chai() {
    console.log(this);
}*/

/*function chai() {
    let userName="siba"
    console.log(this); //it work
}

function chai() {
    let userName="siba"
    console.log(this.userName); //it does not work in funtion like this
}*/

//how to write arrow funtion

const chai = () => {
    let userName="aman"
    console.log(this);
}
//chai()

const addTwo=(num1,num2) => {
    return num1+num2
}

console.log(addTwo(3,4));

//another way to write 
// it called implecite return

const addTwo4=(num1,num2) => num1+num2
const addTwo3=(num1,num2) => {return num1+num2}
const addTwo2=(num1,num2) => (num1+num2)

const addTwo1=(num1,num2) => ({userName:"hitesh"})

//IMMEDIATELY INVOKED FUNTION EXPRESSION (ITFE)

 ( function chai() {
    console.log(`DB CONNECTED`);  //NAMED ITFE
 }) (); //here semicol needed

 // sometime globle scope problem occur ..to avoid that we use iTFE 
// AND it immedieatly executed

( () => {
    console.log(`DB CONNECTED`);
 }) ();

 ( (name) => {
    console.log(`DB CONNECTED ${name}`);
 }) ("amanPani");



