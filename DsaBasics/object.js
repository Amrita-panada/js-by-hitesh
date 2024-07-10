//singleton  constructor se jo banega singleton

//object literals

const mysym=Symbol("key1") //it is a data type


const jsUser={
    name:"amrita" ,   //we can access both key and value in object
    age:23,
    //mysym:"mykey1"  //wrong wayto write
    [mysym]:"mykey1", //special case for symblo 

    3: "num",
    isLoggedIN:false,
    lastLogIn:["mon"],
    "full name":"Amrita panda"
}
//way of access
console.log(jsUser.age); //not a appropriate way

//console.log(jsUser."full name"); ///because we can able to access string in dot method
console.log(jsUser["full name"]); //correct way

console.log(jsUser["email"]); //propper way

//how to access
 //incorrect way
 //console.log(jsUser["mysym"]); //code run but type of mysym change to string
 //console.log(typeof jsUser["mysym"]);

 //correct
 console.log(jsUser[mysym]);
 
//change value 
jsUser.age=27
//no want to change
//Object.freeze(jsUser)

jsUser.greeting=function(){
    console.log("hello aman");
}

console.log(jsUser.greeting()); //check both op
console.log(jsUser.greeting);

jsUser.greeting2=function(){
    console.log("hello js user,${this.name}");
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());