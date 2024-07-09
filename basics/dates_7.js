//dates

let mydate= new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString);

let mydate2=new Date(2023,0,23) //month starts from 0 in js
console.log(mydate2.toDateString());

let mydate3=new Date(2024,3,15,4,2)
console.log(mydate3.toLocaleString());

let mydate4=new Date('2024-01-14')
console.log(mydate4.toLocaleString());

let mydate5=new Date('01-14-2023')
console.log(mydate5.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(mydate3.getTime());
console.log(mydate3.getDate());
console.log(mydate3.getDay());
console.log(mydate3.getMonth());

console.log(Date.now()); //output in meli sec

console.log(Math.floor(Date.now()/1000));

mydate2.toLocaleString('default',{
    weekday:"long"
})