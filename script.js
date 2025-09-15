let x = +prompt("Enter the value");
// this is the  simple if
if(x>5){
    console.log(`x =${x} is greater than  5`)
}
//if else
if(x>=18){
    console.log("You are eligible for the vote")
}
else{
    console.log("You are not eligible for the vote ")

}
//if else if 

if(x >0&&x<=12){
console.log("You are kid")
}
else if(x >13&&x<=19){
console.log("You are teen")
}
else if(x>21&&x<=30){
    console.log("You are young")
}
else{
    console.log("You are old now");
}

//task creating a game guess the number
let = randomNO = Math.round(Math.random()*14+1);
console.log(randomNO)
if(x==randomNO){
    console.log("You enter the right no and you won");
}
else if(x>randomNO){
    console.log("Your no is big")
}
else{
    console.log("NO is less")
}
//////Js code to print the of week when number of the week is given

let day =+prompt("Enter value of day of the week")

switch(day){
    case 0:
        console.log("Sunday");
         break;
         case 1:
        console.log("Monday");
         break;
         case 2:
        console.log("Tuesday");
         break;
         case 3:
            console.log("Wensday");
            break;
            case 4:
        console.log("Thursday");
         break;
         case 5:
        console.log("Friday");
         break;
         case 6:
        console.log("Sunday");
         break;
         default:
            console.log("No day are found");
}