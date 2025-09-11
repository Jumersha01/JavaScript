let n ="Junaid", y = "Shah"

console.log('The gandi said,"good night"',"The time i 5' oclock","My name is n")// wont print your name uses backticks

console.log(`my name is ${n}`);

let cost =5;
let quatity = 25;
console.log(`The toatal price of ${quatity} apples with the each cost${cost} is ${cost*quatity}`)


//strings methods default
let str ="Javascript";
console.log(str.length)//11
console.log(str[0])//j
console.log(str.toUpperCase())//JAVASCRIPT
console.log(str)//Java script becous strings are immutable
console.log(str.toLocaleLowerCase())//java script
console.log(str.charAt(9))// t
console.log(str.indexOf('J'))//0
console.log(str.lastIndexOf('a'))//3
console.log(str.endsWith('pt'))// true
console.log(str.startsWith("kt"))//false
console.log(str.slice(1,5))// avas only take from 1 index to 4 proveded index -1
console.log(str.slice(6))// ript 6 and after 6 index all will be printed
console.log(str.split('a'))// it will cut the string from theere where is a availabe and devide into part and will give you the array
str = "Js is so easy"
console.log(str.split(' ').length-1)// this wil give the number of spaces 




