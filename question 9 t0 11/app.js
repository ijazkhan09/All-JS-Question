// var username = prompt("Ente City name")

// if(username == "karachi"){
//     alert("Welcome to karachi!")
// } else {    
//     alert("This city is not in our list.")
// }

// //  question no 02---------

// var gender = prompt ("male")

// if(gender == "male"){
//     alert("good morning sir")
// } else {
//     alert("good morning madame")
// }

//  question no 03---------

// var signal = prompt("Enter color of traffic light")

// if(signal == "red"){
//     alert("stop")
// }else if(signal == "yellow"){
//     alert("ready to move traffic")

// } else if(signal == "green"){
//     alert("move now")
// }

//  question no 04---------

// var fuel = +prompt("enter fuel litter number")

// if(fuel == 0.25){
//     alert("please refile the fuel container")
// }else{
//     alert("fuel is enough")
// }
//  question no 05---------
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}


if("car" < "cat"){
alert("car is smaller than cat");
}


//  question no 06---------
var sub1 = +prompt("Enter Your Marks")
var sub2 = +prompt("Enter Your Marks")
var sub3 = +prompt("Enter Your Marks")
var totol = 300;

var Obtains_marks = sub1 + sub2 + sub3;
var percantage = (Obtains_marks / totol) * 100;
console.log(percantage, Obtains_marks);
 if(percantage >= 90){
    var remarks = ""
    var grade;
    grade = "A Plus"
    remarks = "Excellent"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else if(percantage >= 80){
    var remarks = ""
    var grade;
    grade = "A one"
    remarks = "Excellent"
   document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else if(percantage >= 70){
    var remarks = ""
    var grade;
    grade = "A"
    remarks = "Good"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else if(percantage >= 60){
    var remarks = ""
    var grade;
    grade = "B"
    remarks = "You Need To improve"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else{
    var remarks = ""
    var grade;
    grade = "Fail"
    remarks = "Sorry"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }

//  question no 07---------
var Random_Number = Math.floor(Math.random() * 10)
console.log(Random_Number);
var user = +prompt("Enter a random number")

if(user == Random_Number){
    alert("Congratulations You Won")
}else{
    alert("Sorry You Lost")
}

//  question no 08---------
var num = +prompt("Enter a Number")
var reminder = num % 3
if(reminder == 0){
   alert(`${num} is divisible by 3`)
}else{
   alert(`${num} is not divisible by 3`)
}


//  question no 09---------

var numeroddandeven = +prompt("Enter a number to Check The is Odd or Even")

var odd = numeroddandeven % 2
if(odd == 0){
   alert(`This Number ${numeroddandeven} is Even`)
}else{
   alert(`Thi Number ${numeroddandeven} is Odd`)
}

//  question no 10---------
var whahter = prompt("Enter Temperature")
if(whahter >= 40 && whahter <= 50){
   alert(`This Temperature ${whahter} is very Hot`)
}
else if(whahter >= 30 && whahter <= 40){
   alert(`This Temperature ${whahter} is Normal`)
}
else if(whahter >= 20 && whahter <= 30){
   alert(`This Temperature ${whahter} is cool`)
}
else if(whahter >= 0 && whahter <= 20){
   alert(`This Temperature ${whahter} is very Cold`)
}
//  question no 11---------
var num1 = +prompt("Enter Number To Calculate :")
var num2 = +prompt("Enter Number To Calculate :")
var operater = prompt("Enter Operator :")
var str = ""
if(operater == "/"){
    str = num1 / num2
   alert(`Result :  ${str}`)
}
else if(operater == "*"){
    str = num1 * num2
   alert(`Result :  ${str}`)
}
else if(operater == "+"){
    str = num1 + num2
   alert(`Result :  ${str}`)
}
else if(operater == "-"){
    str = num1 - num2
   alert(`Result :  ${str}`)
}


