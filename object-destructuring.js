//lets create an object
const obj={
    fName:"Tanvirul",
    Lname:"Islam",
    id:23,
    city:"Chittagong",
    country:"Bangladesh",

};
let {fName,Lname,...z}=obj;
console.log(fName,Lname);//will print First name & Last name//console.log(fName,Lname);//will print First name & Last name
//we can also write as
console.log(fName,Lname,z)
console.log(z);
//but before ES6 we had to write it 
//console.log(obj.fName) always maintain the obj. thing
