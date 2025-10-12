let x =20000;
let p  = new Promise((resolve,reject)=>{
   if(x<30000){
    resolve("You can take the money")
   }
   else{
    reject("No Money");
   }
})

p.then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log("error");
})
let imgs = document.body.querySelector('.im')
console.log(imgs)

    async function a() {
    let a = await fetch(`https://dog.ceo/api/breeds/image/random`);
    let b = await a.json()
let s = b.message;
console.log(s)
imgs.src=s;


}
a()
