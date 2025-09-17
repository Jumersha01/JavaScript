// let a = 10;
// let  b = 20
// a = a+b;// a is 30
// b = a-b;  //b is 10
// a = a-b //  a is 20
// console.log(`${a} and ${b}`)

// let str = prompt("Enter the name");
// let rev ="";

// for(let i =str.length-1;i>=0;i--){
//   rev = rev+str[i]
// }
// console.log(rev) 

// if(str==rev){
//     console.log("String is palindrom");
// }
// else{
//     console.log("String is not palidrom")
// }

// let ar=[5,4,3,2,1];
// let sum =0;
// for(let i =0;i<=ar.length-1;i++){
//  sum+=ar[i];
// }
// console.log(sum)

// let sum = 0;
// let product =1;
// let num = 22;
// let num2 =num;
// while(num!=0){
//     sum +=num%10;
//     product *=num%10;
//     num = Math.floor( num/10);

// }


// if(sum==product){
//     console.log("Yes");
// }
// else{
//     console.log("NO");
// }

let  marks=[[10,20,10,50],[0,10,30,40],[10,10,10,10]]

// for(let i =0;i<=marks.length-1;i++){
//     let sum =0;
//     for(let j =0;j<=marks.length+1;j++){
//         sum+=marks[j];
//     }
//     console.log(`sum of ${sum}`);
// }
let count =1
for(i  of marks){
    let sum =0;
    
    for(let j of i){
        sum+=j;
    }
    console.log(`the sum of test ${count} and ${sum}`)
    count++;
}