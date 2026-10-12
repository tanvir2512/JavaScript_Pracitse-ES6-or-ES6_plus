function saySomething(message1,name,age,message2){
    return{
        message1,name,age,message2
    }
}
console.log(saySomething("Assalamu Alaikum,", "Tanvir ", "Your age is ", "24" ));
//? In this case We can also  use rest operator  for passing more  parameter
function saySomething(message1,name,message2,age,...messageN){
    return{
        message1,name,age,message2, messageN
    }
}
console.log(saySomething("Assalamu Alaikum,", "Tanvir ", "you are now ", "24", "years old", "But you only completed your Bachelor", "Keep on your mind that, within",5, " years you will need to achieve sometihing really magnificient!!"));

