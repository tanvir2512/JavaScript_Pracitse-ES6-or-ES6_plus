//difference between class expression and a class constructor
// constructor() = special method that initializes an object created from that class.
//Class expression: Create a class as an expression, often assigning it to a variable.
//basically its an another way to get same output as like constructor
let student=class{ //here class name doesnot need to write after CLASS keyword
    constructor(id,name,section,age)
    {
        this.id=id;
        this.name=name;
        this.section=section;
        this.age=age;
    }
}
let addStudent = new student(1,"Tanvir", "A", 14);
console.log(addStudent);//print full object
console.log(`The name of first boy is ${addStudent.name}`);//access specific info of the class