function main(){
    let count = 11;
    let d;
const tim =document.body.querySelector(".timer")
const mess = document.body.querySelector(".mes")
    d =  setInterval(()=>{
        tim.textContent = --count;
        if(count==0){
         
         mess.textContent='Happy Birthday'
     
         clearInterval(d)
      }
     },1000); 
    
}
main()