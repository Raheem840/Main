//for loops
const cars = ["BMW", "Volvo", "Saab", "Ford"];

var i = 0;
let len = cars.length;
let text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;

//For-in loops
const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo1").innerHTML = txt;

const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
for (let x in numbers) {
  txt1 += numbers[x];
}
document.getElementById("demo2").innerHTML = txt1;

//Array.forEach()
const numbers1 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers.forEach(myFunction);
document.getElementById("demo3").innerHTML = txt2;

function myFunction(value, index, array) {
  txt2 += value + "<br>"; 
}  

//for of loop
const cars_1 = ["BMW", "Volvo", "Mini"];

let text_1 = "";
for (let x of cars_1) {
  text_1 += x + "<br>";
}

document.getElementById("demo4").innerHTML = text_1;

//while loop
let text_2= "";
let i = 0;
while (i < 10) {
  text_2 += "<br>The number is " + i;
  i++;
}
document.getElementById("demo5").innerHTML = text_2;

//do while loop
let text_3 = "";
let i = 0;

do {
  text_3 += "<br>The number is " + i;
  i++;
} while (i < 10);  
document.getElementById("demo6").innerHTML = text;

//for loop
const cars_2 = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let text_4 = "";
for (; cars[i]; ) {
  text_4 += cars_2[i] + "<br>";
  i++;
}

document.getElementById("demo7").innerHTML = text_4;

//break statement
const cars_3 = ["BMW", "Volvo", "Saab", "Ford"];
let text_5 = "";

list: {
  text += cars_3[0] + "<br>";
  text += cars_3[1] + "<br>";
  break list;
  text_5 += cars_3[2] + "<br>";
  text_5 += cars_3[3] + "<br>";
}

document.getElementById("demo8").innerHTML = text_5;