import {message} from "./first.js" ///importing the variable from first.js file
console.log(message);
import {add} from "./first.js" ///importing the function from first.js file
console.log(`Passing new value from second.js file by using a first.js file's funcion : ${add(9,100)}`); //will print 109 if i run the index.html file
import {array} from "./first.js"
console.log(`The array of first.js file is ${array}`)