//Basic syntax of a class
class ClassName 
{
    constructor()
    {
        //...\\
    }
}
//lets start practise
class books{
    constructor(authorName,Publication,price)
    {
        this.authorName=authorName;
        this.Publication=Publication;
        this.price=price;

    }
}
//usng constructor //constructor(name) initializes the object's name property.
let newbook=new books("Tanvir", "Wiley", "490Tk"); ///creating a books type object [special method that initializes an object created from that class.]
console.log(newbook)
let newbook1=new books("Shopno", "IEEE", "590Tk");
console.log(newbook1);