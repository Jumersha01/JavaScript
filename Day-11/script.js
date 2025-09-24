let arr =[5,4,9,8];
arr.forEach((i,index) => {
    console.log(i*i*i);
});

let arr2 = [2,3,4,56,3];
console.log(arr2.indexOf(3));///first occurent index
console.log(arr2.lastIndexOf(3));///last index of occurence

arr2.find((ele ,index)=> ele%2==0)///will return 2


let arr3 = ["Kajal Agarwal","some Agarwal","aishwary"];
let result =arr3.find((ele,inde)=>{
return ele.endsWith("Agarwal");
})
console.log(result);

arr = [5,4,6,7,8,9,10]
//print array of indexeso odd number
let re=arr.map((ele,inde)=>{
     return ele%2!=0?inde:"null"

    
}
  
)
let r =re.filter((el,ind)=>el!='null')
console.log(r)

let names = ["raja","pooja","john","maza"];
//print first letter of world whoese last letter is a;
let resu =names.filter((e,i)=>{
return e.endsWith("a");

})
resu.forEach((ee,ins)=> console.log(ee.charAt(0)));

arr=[5,8,7,6,1,9,3]
//print the first odd number which is greater than 5
let t = arr.find((e,i)=> e%2!==0&&e>5)
console.log(t)

arr = [5,4,6,8,9]
arr.reverse()
console.log(arr)

let str = "Junaid";
console.log(str.split('').reverse().join(''))

let sum = arr.reduce((pre,cr)=>{return pre+cr},0)
console.log(sum);
