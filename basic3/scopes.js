/*let a=300
if(true){
    let a=10
    console.log("Inner:",a);
}

console.log(a);*/

//NESTED SCOPE

/*function one(){
    const username="amrita"

    function two() {
        const website="insta"
        console.log(username);
    }
    //console.log(website) ;wrong

    two()
}

one()

if(true){
    const username="hitesh"
    if (username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website); error
}
//console.log(username);error*/

//**************INTERSTING******8**** */

//AddOne(5)  here u can access before funtion declaration
/*function AddOne(num) {  //basic way to write funtion
    return num+1
}

AddOne(5)*/

//addTwo(4) in this funtion u cannot access bfore funtion
const addTwo= function (num) {
    return num+2
}

addTwo(4)