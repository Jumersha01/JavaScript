const outputDiv = document.getElementById("output");
const input = document.getElementById("inp");
const btn = document.getElementById("btn");

function getDetails(){
 fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
 .then((res)=>res.json())
 .then((data)=>displayData(data))
 .catch((err)=>console.log(err))

}
btn.addEventListener("click",getDetails);

function displayData(data){
outputDiv.textContent='';
const Pname = document.createElement('h2');
Pname.textContent=`Name ${data.name}`
const Pimage  =document.createElement('img');
Pimage.src=data.sprites.front_default;
Pimage.alt =data.name;
const height = document.createElement('p');
height.textContent= "Height :"+data.height;
 const weight = document.createElement('p')
 weight.textContent="Weight :"+data.weight;
 outputDiv.append(Pimage,Pname,height,weight)
}