//const tinderUser=new Object() //singleton object
const tinderUser={}

tinderUser.id="123fsf"
tinderUser.name="amrita"
tinderUser.isloggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"amite789.com",
    fullname:{
        userFullname:{
            firstName:"amrita",
            lastName:"Panda"
        }
    }
}

//console.log(regularUser);
//console.log(regularUser.fullname.userFullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3);

/*const obj3=Object.assign(obj1,obj2)
console.log(obj3);*/

/*const obj3=Object.assign({},obj1,obj2)
console.log(obj3);*/

const obj3={...obj1,...obj2}
//console.log(obj3);

/*const user=[
    {
        id:1,
        email:"hjasjdgajk.com"
    },

    {

    }
]*/

//user[1].email
/*console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));*/

//restructure

const course={
    courseName:"java script",
    price:999,
    teacher:"hitesh"

}

//course.teacher

const {teacher:tech}=course
 
console.log(tech);