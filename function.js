
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

// function squareNumber(e){
//         let numb1 = document.getElementById("number1").value;
//         let numb2 = document.getElementById("display1");
//         let answer1 = numb1* numb1;
//         numb2.textContent = `the square of ${numb1}, is ${answer1}`;
        
// }

// function halfNumber(){
//         let numb3 = document.getElementById("number2").value;
//         let numb4 = document.getElementById("display2");
//         let answer2 = numb3/2;
//         numb4.textContent = `the half of ${numb3} + % + is ${answer2}`;
// }


// // Percent of
// function percentOf(){
//         let numb5 = document.getElementById("number3").value;
//         let numb6 = document.getElementById("number4").value;
//         let numb7 = document.getElementById("display3");
//         let answer3 = ((numb5/numb6)*100);
//         numb7.textContent = `${numb5},  is  ${answer3}%  of  ${numb6}`;
//   console.log(answer3);
// }



// Area of Circle, round to 2 dp

// function areaOfCircle(){
//         let numb8 = document.getElementById("number5").value;
//         let numb9 = document.getElementById("display4");
//         let answer4 = (Math.PI*(numb8*numb8)).toFixed(2);
//         numb9.textContent = `the area of a circle with ${numb8} is ${answer4}`;

// }
// //  console.log(areaOfCircle(4).toFixed(2));


// function performOn(){
//         let numb10 = document.getElementById("number6").value;
//         let numb11 = document.getElementById("display5");
//         let numb12 = document.getElementById("display6");
//         let numb13 = document.getElementById("display7");
//         let numb14 = document.getElementById("display8");
//         let answer5 = (numb10/2);
//         let answer6 = answer5**answer5;
//         let answer7 = (Math.PI*(answer6*answer6)).toFixed(2);
//         let answer8 = ((answer7/answer6)*100);
//         numb11.textContent = `the half of ${numb10} is ${answer5}`;
//         numb12.textContent = `the square of ${answer5} is ${answer6}`;
//         numb13.textContent = `the area of ${answer6} is ${answer7}`;
//         numb14.textContent = `${answer7} is ${answer8}%  of ${answer6}`;
        





        // let y = squareNumber(x);
        // let z = areaOfCircle(y);
        // let r = percentOf(z, y);
        // return (r).toFixed(2);
// }

// let year = 2020;
// let today = "sunday";
// let month = "january";
// function fullDate(){
//         alert(today, month);
// }
// alert(year);

// console.log(performOn(2));

 let endDate = new Date("jan 19, 2020 10:10:10").getTime();
 let presentTime = new Date().getTime();
 let t = endDate - presentTime;
 let days = Math.floor(t/(1000*60*60*24));
 let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
 let minutes = Math.floor((t%(1000*60*60))/(1000*60));
 let seconds = Math.floor((t%(1000*60))/1000);
 document.getElementById("demo").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
 if (t<0) {
        //  console.log(t);
         clearInterval();
         document.getElementById("demo").innerHtml = "Expired";

 }





