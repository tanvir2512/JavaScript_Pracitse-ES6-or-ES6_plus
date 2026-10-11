//rest parameter: if we want to pass multiple parameters in a function then
//  we can use rest parameter. It is represented by three dots(...) 
// before the parameter name. It allows us to represent an indefinite 
// number of arguments as an array.
function printAny(...numbers){
    console.log(numbers);
}
printAny("Tanvir","Jawad","Rana","Sakib","Shuvo","Rifat"); //?will print all the names in an array
function printAnything(a,b,...name)
{
    console.log(a,b,name);
}
printAnything(1,2,"Tanvir","Irfan"); //a=1,b=2, name=["Tanvir","Irfan"]
//?But without rest parameter 
function f_name(name)
{
    console.log(name)
}
f_name("first","2nd","3rd"); //? it will not print the 2nd and 3rd parameter

