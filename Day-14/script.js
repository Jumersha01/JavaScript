// let ds = document.querySelector(".container").addEventListener("mouseover",(e)=>{

// e.target.style.backgroundColor="red";

// });

let ps1 =document.body.querySelector('.one')
let ps2 =document.body.querySelector('.two')
let ps3 =document.body.querySelector('.three')
document.addEventListener("keydown",(e)=>{
   if(e.key=='r'||e.key=='R'){
    document.body.querySelector(".hs").style.color='red';
  
   }
   else if(e.key=='g'||e.key=='G'){
     document.body.querySelector(".hs").style.color='green';
   }
   else if(e.key=='b'||e.key=='B'){
     document.body.querySelector(".hs").style.color='blue';
   }
})
document.body.querySelector("#from").addEventListener('submit',(e)=>{
e.preventDefault()
console.log('hi')
let values = document.querySelector(".control").value;
let pass = document.querySelector(".pas").value
let email = document.querySelector(".em").value
if(values==''){
 
    ps1.textContent=`Name Cant be Empty`
   ps1.style.color='red';
  
}
else if(pass==''){
ps2.textContent='Password Cant Be Empty'
 ps2.style.color='red';
}
else if(email==''){
    ps3.textContent='Email Cant Be Empty';
 ps3.style.color='red';
}
})