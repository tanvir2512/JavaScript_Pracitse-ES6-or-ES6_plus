//inheritance is a OOP property that helps to share one class's (parent) methods,function to another class (child)
class parent{
    asset1 (){
        console.log("Got this line from asset1 function which is under parent class")
    }
    asset2(){
        console.log("Got this line from asset2 function which is under parent class")

    }
}
class child extends parent{
    //now child class got all the functions from  parent class
}

let obj= new child;
obj.asset1(); //calling parent class function using child class
obj.asset2();