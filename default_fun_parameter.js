function say (message="Hi, How are you Tanvir?") //?this is the default parameter
{
    console.log(message)
}
say(); ///will print default string
say("Hello, Tanvir Whats going on?") //?will print the custom message
//TODO lets try another one


function stock_out(comment="The product is stock out!!")
{
    console.log(comment);
}

function limited_stock(comment="This product stock is  limited!!!")
{
console.log(comment);
}

let number=0;
if(number===0)
{
    stock_out();
} else if(number<=5)
{
    limited_stock();
}