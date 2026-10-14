const array1=[4,5,6]
let[a,b,c]=array1;
console.log(c); //will print 6


const array=[1,2,3,4,5,6]
let [a1,b1,c1,...z]=array; //spread opertor
console.log(z);// will print 4,5,6 cause a1=1, b1=2, c1=3 ...z will take rest of the value
///lets do more
const score=[50,60,70,80]
let newScore=[20,30,40,...score,90,100];
console.log(newScore)
