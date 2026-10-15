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
let newbook=new books("Tanvir", "Wiley", "490Tk"); ///creating a books type object
console.log(newbook)
let newbook1=new books("Shopno", "IEEE", "590Tk");
console.log(newbook1);