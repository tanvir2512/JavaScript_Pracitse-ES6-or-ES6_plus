//static_method = we need to add "Static" keyword before any method of function which one we will use
//for example
//before ES6
class cost {

    sum(a,b){
       
            console.log(`The sum is = ${a+b}`)
        
    }
}

let obj= new cost(); //we have to create a cost type object before calling sum funciton
obj.sum(10,7);
console.log("Applying Static Method to do the same thing");

///lets make this a bit shorten
class operation{
    static sum(a,b){
        console.log(`The sum is -> ${a+b}`)
    }
}
operation.sum(100,5);