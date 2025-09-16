// console.log(Math.round(Math.random()*10+10))
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// let name = "Junaid";
// for(let j =0;j<=name.length-1;j+=2){
//     console.log(name.charAt([j]));
// }

// let arr = [1,2,3,4]
// for(let k =0;k<=arr.length-1;k++){
//     console.log(arr[k]);
// }



// let arr2=[4,8,9,5]
// for (let i of arr2) {
//     console.log(i);
// }

// let n = 20;
// let even =0;
// let odd =0;

// for(let i =1;i<=n;i++){
//   if(i%2==0){
//     even = i;
//     console.log(even);
//   }
 
// }

let no =123;
let org = no;
let rem =0;
let sum = 0;
while(no!=0){
    rem = no%10;
    sum = sum *10+rem;
    no = no /10;

}
console.log(sum)