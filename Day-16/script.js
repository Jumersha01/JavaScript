let d;
function time(){
   d =setInterval(()=>{
      const date =  new Date()
    h.textContent=`${date.toLocaleTimeString()}`
   },1000)
}
let h = document.body.querySelector('h1')

console.log("bye")
document.body.querySelector(".btn1").addEventListener("click",()=>{
clearInterval(d);
})
document.body.querySelector(".btn2").addEventListener("click",()=>{
time()
})
