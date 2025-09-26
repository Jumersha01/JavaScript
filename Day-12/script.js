
// let obje ={
//     name:"Junaid",
//     age:23,
//     greet:function(){
//         console.log("Hellow World")
//     }
// }
// console.log(obje.name)//name will be print
// console.log(obje["name"]);// name will be print
// console.log(obje.greet())

document.body.querySelector(".btn").addEventListener("click",(e)=>{
    let values = document.body.querySelector(".val").value
    let hd = document.body.getElementsByTagName("h1")
    hd[0].textContent=values.toUpperCase()
    document.body.style.backgroundColor=values;
})
document.body.querySelector(".cl").addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    let hd = document.body.getElementsByTagName("h1")
    hd[0].textContent=`none`.toUpperCase()
})