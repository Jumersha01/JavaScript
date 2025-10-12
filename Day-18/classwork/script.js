let showing = document.querySelector(".quate");
let btn =document.querySelector(".get");
let author = document.querySelector(".author")


async function showInfo() {
   try{
     let data = await fetch(`https://dummyjson.com/quotes/random`);
    let response = await data.json();
 
    showing.textContent=response.quote
    author.textContent=`Author : ${response.author}`
    showing.style.color='orange'
    author.style.color='green'
   }
   catch(err){
    console.log(err)
   }
    
}
console.log(btn)
btn.addEventListener("click",showInfo);