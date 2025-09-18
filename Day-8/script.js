// simple function: write a function that prints "Hellow World" and  call it

function helloWorld(){
    console.log("Hellow world");
}
helloWorld();

// //write a function that takes two values and print their sum
function sum(a,b){
    console.log(` sum is ${a+b}`);
}
sum(5,4);


//write  a function that accepts a string and return a number of character;
function NumberOfchar(x){
    if(typeof(x)=='string'){

    return x.length;
    }
    else{
        return `Ipute string only`
    }
}
let value = NumberOfchar("Junaid");
let valu2 = NumberOfchar(1234)
console.log(value)
console.log(valu2)

//functions are also treated as a variable in the JavaScript so that whole function defination is strored as a variable
// we can even creat even "function expressions" as follows: thse functions aare not hoisted which means you cannot acces it before initialization
 
let a = function(){
    console.log("Hi");
}
a();
console.log(a)

// write a function that return area of circle using parameters radius;
function areaOf(r){
    return Math.PI*r*r;
}
let a1 =areaOf(5);
console.log(a1)

//Arrow Funtion
let add3=(a,b)=>a+b;
console.log(add3(5,6))