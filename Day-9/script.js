function addition(value){
    value(4,5)
}

function data(x,y){
    console.log(x+y)
}
addition(data)



function greet(name,fun){
    fun(name)
}

function Sayname(n){
console.log(`My name is ${n}`)
}
greet("Junaid",Sayname)



function outer(){
      let a = 5;
      function inner(){
        console.log(a);
      }
      return inner
}

let x = outer()
console.log(x())



(function() {
    console.log("HI");
})();
