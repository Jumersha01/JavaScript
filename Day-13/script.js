let  show = document.body.querySelector("h1");
let count = 0;

let add = document.body.querySelector("#Plus").addEventListener("click",()=>{
    count++;
    if(count>20){

       show.innerHTML=`20`;
    }
    else{
        show.innerHTML=count;
    }

})

let dec = document.querySelector("#Minus").addEventListener("click",()=>{
    count--;
    if(count<0){
         show.innerHTML='0';
         alert("The number shuould not ne less than 0")
    }
    else{
 show.innerHTML=count;
    }
   
})
let res = document.querySelector("#Reset").addEventListener("click",()=>{
  
    show.innerHTML=`0`;
})

let inp = document.querySelector("#in")

