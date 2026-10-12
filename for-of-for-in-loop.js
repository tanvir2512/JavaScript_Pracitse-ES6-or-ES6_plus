///learn with the true basic
for (let i=0;i<=5;i++)
{
    console.log(i);
}  // traditional loop

console.log("===================")
///for of loop
//lets take an array
const array=[1,2,3,4,5]
for(my_array of array) //my_array will take all those elements of array then 
//will print all ELEMETNS
{
    console.log(my_array);
}


const array2=[10,9,8,7,6]
for (newArray in array)
{
    console.log(newArray) //// will print only index;

}

// lets try with an object

const person ={
    name:"Tanvir",
    age:24,
    dream:"Software Engineer"
}

for (obj in person)
{
    console.log(obj) ///will print all the properties
}