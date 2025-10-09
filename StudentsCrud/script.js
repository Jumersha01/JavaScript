const form =document.querySelector("#fr");
const nameInput =document.body.querySelector("#name");
const emailInput =document.body.querySelector("#email");
const passwordInput =document.body.querySelector("#password");
const conf_passInput =document.body.querySelector("#con-pasword");
const errorDiv =document.body.querySelector("#error");


function add(){
    form.classList.toggle('hide');
 
}
document.querySelector("#btn").addEventListener("click",add);

form.addEventListener('submit',submitLogic);

function submitLogic(e){
    e.preventDefault();
errorDiv.textContent=''
      if(nameInput.value.trim()==''){
      const p = document.createElement('p')
      p.textContent="Name is Required";
      p.style.color='red';
      errorDiv.appendChild(p);
      
   }
    if(emailInput.value.trim()==''){
      const p = document.createElement('p')
      p.textContent="Email is Required";
      p.style.color='red';
      errorDiv.appendChild(p);
      
   }
    if(passwordInput.value.trim()==''){
      const p = document.createElement('p')
      p.textContent="Password  is Required";
      p.style.color='red';
      errorDiv.appendChild(p);
      
   }

   if(conf_passInput.value.trim()==''){
      const p = document.createElement('p')
      p.textContent=" Confirm Password  is Required";
      p.style.color='red';
      errorDiv.appendChild(p);
      
   }
   if(conf_passInput.value.length<8){
    const p = document.createElement('p')
      p.textContent="Password should be Alteast 8 character is";
      p.style.color='red';
      errorDiv.appendChild(p);
   }
   if(passwordInput.value!=''&&conf_passInput.value!=''){
    const p = document.createElement('p')
      p.textContent="Password and confrim password not getting matched";
      p.style.color='red';
      errorDiv.appendChild(p);
   }
}

document.body.querySelector("#show-pass").addEventListener("click",function(){
    conf_passInput.type=conf_passInput.type=='password' ? 'text': 'password';
    console.log("HI")
})
document.body.querySelector("#show-pass2").addEventListener("click",function(){
passwordInput.type=passwordInput.type=='password' ? 'text': 'password';
    console.log("HI")
})