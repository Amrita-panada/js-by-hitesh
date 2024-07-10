//array

//const myarr=[0,2,1,'3',"ami",true] //different type of collection of multiple items

/*const myarr=[1,2,3,4,5]
console.log(myarr[0]);

//METHODS 
myarr.push(6)
console.log(myarr);

myarr.pop(6)
console.log(myarr);

myarr.unshift(9) // push  in first
myarr.shift     // pop in first

console.log(myarr.includes(8));
console.log(myarr.indexOf(8));

const newarr=myarr.join()
console.log(myarr);
console.log(newarr);
console.log(typeof newarr);

//slice,splice

console.log("A ",myarr);

const myn1= myarr.slice(1,3) //op-1,2
console.log(myn1);
console.log("B ",myarr);

const myn2= myarr.splice(1,3) //
console.log(myn2);
console.log("C ",myarr);*/

const marvel_hero = ['thor',"ironman","spiderman"]
const dc_heros=["supperman","flash","batman"]

/*marvel_hero.push(dc_heros)

console.log(marvel_hero);
console.log(marvel_hero[3][1]); //op-flase

marvel_hero.concat(dc_heros)
console.log(marvel_hero); //not working

const allHero=marvel_hero.concat(dc_heros)
console.log(allHero); // now  both arry join properly*/


const all_new_hero=[...marvel_hero,...dc_heros] //concado spread operator
console.log(all_new_hero);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("amrita"));
console.log(Array.from("amanpani"));
console.log(Array.from({name:"hitesh"})); // intersting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));