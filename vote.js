/* vote system
const age = 18;
if (age < 18){
    console.log("you are a minor");
}
else if (age >= 18 && age < 105){

    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}
*\

/* party gender selection
const sex = prompt("what is your sex?");
if (sex == "female"){
    alert("get out");

}
else
alert("welcome");
 *\

/* simple interest
let p = 5000;
let r = 1;
let t = 6;

if(p >= 5000 && r >= 1 && t >= 6){
    console.log(p*r*t/100);
}
else if(p < 5000 || r < 1 || t < 6)
{
    console.log("no loan for you yet");
}
*/


let p = 5000;
let r = 0.05;
let n = 12;
let t = 10;

let A = p*(1 + r/n)**n*t;


console.log("your principal interest is");
console.log(A);
