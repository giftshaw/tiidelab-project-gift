
        // alert('i am javascript');
        // let admin;
        // let name='john';
        // admin=name;
        // alert(admin);
// age=18;
//         if (age==18) {

   
//         alert("welcome");

// }


// let lang=prompt("whats the official name of javascript");
// if(lang=='ecmascript'){
//         alert('right');
// }
// else{
//         alert('you dont kow? ecmascript');
// }

// let numb=prompt('enter number', 0);
// if(numb > 0){
//         alert(1);
// }
// else{
//         if(numb < 0);
//         alert(-1);
// }
// else{
//         alert(0);
// }


// Square Number

function squareNumber(number){
        return number**2;
}
console.log(squareNumber(4));

// half Number

function halfNumber(number){
        return number/2;
}
console.log(halfNumber(10));

// Percent of
function percentOf(a, b){
        return ((a/b)*100);

}
console.log(percentOf(2, 4));


// Area of Circle, round to 2 dp
function areaOfCircle(radius){

return Math.PI*radius*radius;

}
 console.log(areaOfCircle(4).toFixed(2));

function performOn(no){
        let x = halfNumber(no);
        let y = squareNumber(x);
        let z = areaOfCircle(y);
        let r = percentOf(z, y);
        return (r).toFixed(2);
}

console.log(performOn(2));

