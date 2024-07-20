// for of
/*const arr =[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const greetings ="hello world"
for (const greet of greetings) {
    console.log(`each word is ${greet}`);
}*/

//maps

// const map =new Map()
// map.set("IN","India")
// map.set("USA","America")
// map.set("FR","France")
// map.set("IN","India")

// console.log(map); //unique values , and orderly

/*for (const i of map) {
    console.log(i);        op-  ['in','india']
}                               [----------- ]*/

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//const newNumbers=myNumbers.map((num) => num+10)

const newNumbers=myNumbers
                 .map((num) => num*10)
                 .map((num) => num+1)
                 .filter((num) => num>=40)


console.log(newNumbers);



//correct way
for (const [key,value] of object) {
    console.log(key,":-",value);
}

const myobj={
    "game1":"NFS",
    "game2":"spiderman"
}

// for (const [key,value] of myobj) {
//     console.log(key,":-",value);  // object not iterable by this way
// }

const myjob={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myjob){
    console.log(key);
    console.log(myjob[key]);
    console.log(`${key} shortcut is for ${myjob[key]}`);

}

const arr2=["js","py","java","cpp"]
for(const key in arr2){
    console.log(key);
    console.log(arr2[key]);
}

//important loop

// arr2.forEach( function (item){
//     console.log(item);
// } )

// array.forEach((item) => {
//     console.log(item);
// });

// function printme(item){
//     console.log(item);
// }

// arr2.forEach(printme)

// arr2.forEach(item,index,arr2 => {
//     console.log(item,index,arr);
// });


/*const mycoding=[
    {
        language:"java",
        fileName:"basic java"
    },

    {
        language:"DSA",
        fileName:"basic DSA"
    },

    {
        language:"js",
        fileName:"basic js"
    }

]*/

//how to access

// mycoding.forEach((item) => {
//     console.log(item.fileName);
// })

/*const values= mycoding.forEach((item) =>{
    console.log(item);
    return item // no return op-undefined
})*/

const myNums=[1,2,3,4,5,6]
const newNums=myNums.filter((num) => num>4)
console.log(newNums);

/*const newNums1=myNums.filter((num) => {
    return num >4                     //if u use scope then u have to write return
})*/