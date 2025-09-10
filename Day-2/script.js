
// let radius =+prompt("Enter the area of the radius")
// const py = 3.14
// console.log(`the area of circle is`,(py*radius*radius))

// console.log(typeof(radius))

let a =25
console.log(typeof(a));
a = "prasand"
console.log(typeof(a));
a=1.5
console.log(typeof(a));
a = null
console.log(typeof(a));
a = undefined;
console.log(typeof(a));
a = true
console.log(typeof(a));
function x(){}
console.log( typeof (x));
 
let num = 25.4168
console.log(typeof num)

console.log(num.toFixed(2)) //it will fixed to 2 digits after decimal/or round
//  if the after 2 point value the third point value is bigger that 6 it will add one to the  second dighet after point so th op will be 25.42;

console.log(num.toPrecision(3))// it wont cosiider the point it will count from first number to the provided number and print including the point
// so here the op will 25.4

num =25;
console.log(num.toString(2)) // to string convert the number into base 

// math methods
console.log(Math.sqrt(16))
console.log(Math.cbrt(27))
console.log(Math.pow(2,3))
console.log(Math.abs(-4))
console.log(Math.max(5,3))
console.log(Math.round(5.4))
console.log(Math.min(1,2,3,-7))
console.log(Math.ceil(2.1))
console.log(Math.floor(2.1))
console.log(Math.ceil(Math.random()*10000))
