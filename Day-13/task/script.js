 document.querySelector(".find").addEventListener("click",()=>{
   let values = document.querySelector(".get").value
   let h = document.querySelector(".show")
   if(values%2==0){
    h.style.color="green";
    h.textContent=`${values} Is Even`;
   }
   else{
     h.style.color="red";
     h.textContent=`${values} Is Odd`;
   }

})