/*console.log(`Hello World`);
console.log(`Welcome to GreenBridge School of Open Technologies`);
console.log(`You'll love it here at GreenBridge`);*/

/*var1 = 10;
var2 =20;
var3 = var1 * var2;
var4 = var1 + var2;
var5 = var1 - var2; 
var6 = var2/var1;
var7 = var2 % var1;
document.write(`${var3},  ${var4},${var5},${var6},${var7}`);*/
//alert("Hello World");
//alert("Welcome to GreenBridge School of Open Technologies");
console.log("Welcome to GreenBridge");

/*let a = 10;
let b = 2;


let c = a;//assigning the value of a to c (Assignment expression)
let d = a + b;//addition of a and b (Arithmetic expression)
let e = a - b;//subtraction of a and b (Arithmetic expression)
let f = a*b;//multiplication of a and b (Arithmetic expression)
let g = a%b;//modulus of a and b (Arithmetic expression)
let h = a/b;//division of a and b (Arithmetic expression)

document.write("c = " + c + "<br>");
document.write("d=" + d + "<br>");
document.write("e=" + e + "<br>");
document.write("f=" + f + "<br>");
document.write("g=" + g + "<br>");
document.write("h=" + h + "<br>");


document.getElementById("output").innerHTML = "Hello World";

var myVar = "Jarvis";   //Declare a global variable
function checkScope(){
    var _myVar = "Greenbridge"; // Declare a local variable
    document.write(_myVar);
}
//checkScope();
 


function test(){
    // Hoisting is not supported by let keyword
    let m = 100;
    document.write("m = " + m + "<br>")
   
        
    n = 90; 
    document.write("n = " + n + "<br>");
    var n;
   
}
test();
// defining the constant array
const arr = ["door","window","roof","wall"];
//updating arr[0]
arr[0] = "gate";
//inserting an element to the array
arr.push("fence");
const arr2 = ["table", "chair"]; //This will cause an error because you can't reassign a constant array
arr2.push("dining","side-pot","Tv", "Wallpapers")
//Printing the array
document.write("The contents of arr are "+ arr);
document.write("<br>");

const arr1 = ["Bruce", "Jesse", "Derrick", "Jade" , "Mercy"];
arr1.push("Stephen","Ange","Herady")
document.write("The values of arr1 are "+ arr1 + "<br>");
console.log(arr1);
document.write(arr2 + "<br>");
document.write("<br>");


//Defining a constant object
const obj ={
    animal : "horse",
    color : "brown"
};
//inserting legs property
obj.legs = 4;
//obj = {name : "cow"} //This is not possible
obj.food ="grass";
obj.shelter = "jungle/forest/zoo";
document.write(JSON.stringify(obj));
document.write("<br>");
document.write("<br>");
document.write("<br>");



let str1 = "Hello guys";
let str2 = 'I am iron nerd';
let str3 = `To infinty`;
document.write(str1 + "<br>");
document.write(str2 + "<br>");
document.write(str3 + "<br>");


let bool1 = true;
let bool2 = false;
document.write("The value of bool11 is "+bool1 + "<br>");
document.write("The value of bool2 is "+bool2 + "<br>");
document.write("<br>");


let houseNo= null;//contains undefined value
let apartment = "A-jay";
apartment = null; // assingning the value to null
document.write("The value of the houseNo is "+ houseNo + "<br>");
document.write("The value of the apartment is "+ apartment + "<br>");

document.write("<br>");
let largeNum = 12345667890263627362861736726352n;
document.write("The value of largeNum is "+ largeNum + "<br>");


let sym1 = Symbol("123");
let sym2 = Symbol("123");
let res = sym1 === sym2;
document.write("Is sym1 and sym2 are same?  "+ res + "<br>");
document.write("<br>");

const person = {
    name : "Raheem",
    age : 19,
    nationality : "Congolese",
    favoritefood : "Pizza and Burgers",
    hobbies : "Coding, learning new stuff, playing soccer and video games"
};
document.write(JSON.stringify(person));
document.write("<br>");

const colours = ["red", "blue", "green", "yellow", "black", "white"];
document.write("The given array is " + colours + "<br>");

const students = ["Jesse", "Derrick", "Mercy", "Jade", "Raheem"];
document.write("The students in this class are : " + students + "<br>");
document.write("<br>");

//Date object
let date = new Date();
let numberDate = date.getTime();
document.write("The numeric date is " + numberDate + "<br>");
let stringDate = date.toString();
document.write("The string date is " + stringDate + "<br>");
document.write("<br>");


let first = "one";//string
first = 1//number
document.write("The value of first is " + first + "<br>");
first = true;//boolean
document.write("The value of first is " + first + "<br>");
document.write("<br>")

let num = 100 + undefined;// prints NaN
document.write("The value of the num is " +  num + "<br>");
num = false * undefined;//prints NaN
document.write("The value of the num is " + num + "<br>");


document.write("<br>");
document.write("100" + 24 + "<br>");
document.write("100" + false + "<br>");
document.write("100" + null+ "<br>");
document.write("100" + undefined + "<br>");

document.write("<br>");
document.write(Boolean("100") + "<br>");
document.write(Boolean(0) + "<br>");
document.write(Boolean("") + "<br>");
document.write(Boolean("Hi") + "<br>");
document.write(Boolean(null) + "<br>");

document.write("<br>");
var xx = 10;
var yy = --xx;//Prefix decrement
var a1 = 10;
var b = a1--;//Postfix decrement
document.write("x = " + xx + "<br>");
document.write("y = " + yy + "<br>");
document.write("a = " + a1 + "<br>");
document.write("b = " + b + "<br>");

const a2 = 10;
const b2 = 20;
let result = (a2 <= b2);
document.write("(a2 <= b2 ) => " + result); 

document.write("<br>");
document.write("<br>");
document.write(!true + "<br>" + !false + "<br>"
    + !0 + "<br>" +
    !20 + "<br>" +
    !("Hello world"));

let str1 = "";
let str2 = "Hello";
let str3 = "World"
let firstName = "Rahim";
 firstName += "Stone";
console.log("My name is " + firstName );


let a_1 = 7;
 a_1 ^= 5;
console.log("The value of x : " + a_1);


var num1 =  90;
var num2 =  67;
var res = num1 > num2 ? "Num1 is greater than Num2" : "Num2 is greater than Num1";
console.log(res);

const year = 2000;
const obj = {
    name : "Gedeon",
    age : year< 2005 ? "adult" : "minor",
    city : "Kampala",
    gender : "male",
    

};

document.getElementById("output").innerHTML = obj.name + " is a  " + obj.gender +" "+ obj.age + " and lives in " + obj.city;


let operator = "-";
let res = operator == "+" ? 10 + 20 : 10 - 20;
document.getElementById("output").innerHTML = "The reult is " + res;


const greet = (user) => {
    const name = user ? user.name : "stranger";
    return `Hello, ${name}                            `

};
document.getElementById("output").innerHTML = greet({name : "Raheem"}) + "<br>" + greet(null);

const myFunc = function(){return "Hello World"};
document.getElementById("output").innerHTML = typeof myFunc;

/*
const response = ["Hello", "World" , "How", "are" , "you ?"];

if(typeof response){
    document.write("The response is ~ " response);
}
else{
    document.write("The response is : " );


//Traversing the array
for(let val of response){
    document.write(val, " ")
}
}

let numbers = [1,2,3];
document.getElementById("output").innerHTML = Array.isArray(numbers);

const first = 30 / 5 % 3 * 2;
const second = 2 ** 3 ** 2;
document.getElementById("output").innerHTML = first + "<br>" + second;

function myfunction(a, b){
    return a * b;
}


let x =9.569300; 
let y = x.toFixed(2);
document.getElementById("output").innerHTML = (y);

const cars = [];
cars[0] = "Toyota";
cars[1] = "BMW";
cars[2] = "Rolls Roycs";
cars[3] = "Benz";
document.getElementById("output").innerHTML = cars;

const students = ["Jesse", "Derrick", "Mercy", "Jade", "Raheem", 19];
document.getElementById("output").innerHTML = students;

const universities = ["Havard", "MIT", "Oxford", "Cambridge"];
universities[1] = "KIU"
document.getElementById("output").innerHTML = universities;
document.getElementById("output1").innerHTML = students[5];

const fruits = ["Apple", "Banana", "Mango", ];
fruits[6] = "Grapes";
fruits[4] = "Orange";
fruits[5] = "Guava";
fruits[3] = "Pineapple";

 let flen = fruits.length;
 let text = "<ul>";
for ( let i = 0; i < flen; i++){
    text += "<li>" + fruits[i] + "</li>";
 }
text += "</ul>" 
document.getElementById("output1").innerHTML = text;

let z = Math.sqrt(64);
document.getElementById("output2").innerHTML = z;

let pi = Math.PI;
document.getElementById("output2").innerHTML = pi;

let maximum = Math.max(0, 150, 30, 20, -8, -200);
document.getElementById("output2").innerHTML = maximum;

let log = Math.log(2);
document.getElementById("output2").innerHTML = log;

let time = new Date().getHours();

if(time < 12){
    document.getElementById("output2").innerHTML = "Good day!";
}
else if (time < 20){
    document.getElementById("output2").innerHTML = "Good day!";
}
else {document.getElementById("output2").innerHTML = "Good evening!"}


let texts;
if (Math.random() < 0.5){
    texts =
      "<a href = 'https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-vbs'>VBS</a>";
}
else{
    texts = "<a href = 'https://en.wikipedia.org/wiki/Green'>Greenbridge</a>";
}
document.getElementById("output2").innerHTML = texts;

let day ;
switch(new Date().getDay()){
   case 4:
   case 5:
    day = "Its almost the weekend";
    break;
  case 0:
  case 6:
    day = "It is the weekend";
    break;
  default:
    day = "Looking forward to the weekend";
    break;      

}
document.getElementById("output2").innerHTML =  day;

let w = "0";
switch(w){
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
        break;
}
document.getElementById("output3").innerHTML = w;

try{
    addalert("Welcome to GreenBridge School of Open Technologies");
}
catch(err){
    document.getElementById("output3").innerHTML = err.message;
}

function my_func(){
    const message = document.getElementById("p1");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try{
        if(x.trim()== "") throw "Input is empty";
        if(isNaN(x)) throw "Input is not a number";
        x = Number(x);
        if(x < 5) throw "Input is too low";
        if(x > 10) throw "Input is too high";
    }
    catch(err){
        message.innerHTML = "Error:  " + err;
    }
    finally{
        document.getElementById("demo").value = "";
    }
}

let num = 1;
try{
    num.toPrecision(500);

}
catch(err){
    document.getElementById("p1").innerHTML = err.message;
}

let x1 = 10;
try{
    num.toUpperCase();
}
catch(err){
    document.getElementById("p1").innerHTML = err.name;
}

//Arrow function
let myfunc = (a, b) => a * b;
document.getElementById("p1").innerHTML = myfunc(5, 10);


let hello = function(){
    document.getElementById("p1").innerHTML = this;

}
//The window object calls the function
//window.addEventListener("load", hello);

//The button object calls the function
document.getElementById("btn").addEventListener("click", hello);


//JS Classes
class Students {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const myStudent1 = new Students("Jesse", 20);
const myStudent2 = new Students("Derrick", 22);
const myStudent3 = new Students("Raheem", 19);

document.getElementById("p1").innerHTML = myStudent1.name + " " + myStudent1.age + "<br>" + myStudent2.name + " " + myStudent2.age +"<br>" + myStudent3.name + " " + myStudent3.age;

function Person(first, last, age, eye, village) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Ugandan ";
  
}
Person.prototype.nationality = "Ugandan";
Person.prototype.village = "Kampala";
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};



const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo1").innerHTML = "My father is " + myFather.name()+ ", "+ "The nationality of my father is " +
    myFather.nationality +
    "and his village is  " +
    myFather.village +
    "<br>" +
    "My mother is " +
    myMother.name() +
    ", " +
  "The nationality of my mother is " +
  myMother.nationality + "and her village is  "+ myMother.village;
 
  
//Property manangement methods
//defineProperty() and defineProperties()
const person = {
  firstName: "Raheem",
  lastName: "Stone",
  language: "English",
};

// Add a Property
Object.defineProperty(person, "language", { value: "Swahili" });

// Display the Property
document.getElementById("demo2").innerHTML = person.language;


const Family = {
  Grandfather: "Hussein",
  Father: "Ange",
  Mother: "Herady",
    Son: "Raheem",
    language: "Swahili",
    village: "Kampala",
};
// Display all Properties
document.getElementById("demo3").innerHTML = Object.getOwnPropertyNames(Family) + "<br>";

const person2 = {
    firstName: "Raheem",
    lastName: "Stone",
    age: 19,
    eyeColor : "brown"
};
const person3 = {firstName:"Anna",lastName:"Sinclair"};
Object.assign(person2, person3);

//let text2 = Object.entries(person2);
//document.getElementById("demo3").innerHTML = text;

const fruits2 = {Banana: 300, Apples: 500, Oranges:600};
let text3 = "";
for(let [fruit, amount] of Object.entries(fruits2)){
    text3 += fruit + ":" + amount + "<br>";
}
document.getElementById("demo3").innerHTML = text3 + "<br>";

const myMap = new Map(Object.entries(fruits2));
document.getElementById("demo4").innerHTML = myMap;

const person4 = {
  firstName: "Raheem",
  lastName: "Stone",
  language: "English",
};
let text4 = Object.values(person4);
document.getElementById("demo5").innerHTML = text4;


const fruits5 = [
  { name: "Apples", quantity: 300 },
  { name: "Bananas", quantity: 500 },
  { name: "Guavas", quantity: 100 },
  { name: "Kiwi", quantity: 700 }
];
//callback function to select low values
function myCallback({quantity}){
    return quantity >200 ? "ok" : "Low"
}
//group by ok and low
const result =  Object.groupBy(fruits5, myCallback);

//display results
let text5 =  "These fruits are ok: <br>"
for (let[x,y] of result.ok.entries()){
    text5 += y.name +" " + y.quantity + "<br>";
}
document.getElementById("demo6").innerHTML = text5;

let text6 = "These fruits are low: <br>";
//for (let [x, y] of result.low.entries()) {
  text5 += y.name + " " + y.quantity + "<br>";
//}
//document.getElementById("demo7").innerHTML = text6;

//JSON string
*/

let tex = '{ "students": ['+
    '{ "firstName": "Mercy", "lastName": "Kay" },'+
    '{ "firstName": "Jade", "lastName": "Shakira" },'+
    '{ "firstName": "Kyaku", "lastName": "Jesse" },'+
    '{ "firstName": "Derrick", "lastName": "Akol" },'+
    '{ "firstName": "Raheem", "lastName": "Stone" }'+
  ']}';

const obj = JSON.parse(tex);
/*document.getElementById("demo8").innerHTML = obj.students[0].firstName + " " + obj.students[0].lastName;
document.getElementById("demo9").innerHTML = obj.students[1].firstName + " " + obj.students[1].lastName;
document.getElementById("demo10").innerHTML = obj.students[2].firstName + " " + obj.students[2].lastName;
document.getElementById("demo11").innerHTML = obj.students[3].firstName + " " + obj.students[3].lastName;
document.getElementById("demo12").innerHTML = obj.students[4].firstName + " " + obj.students[4].lastName;
*/

const element = document.getElementsByTagName("p");
document.getElementById("demo13").innerHTML ="The text in the first paragraph is: "+ element[0].innerHTML;


//const a = document.getElementById("main");
const a = document.forms[0];
let text7 = "";
for(let i = 0; i<a.length; i++){
    text7 += a.elements[i].value +"<br>";
} 
document.getElementById("demo14").innerHTML = text7;
document.getElementById("demo15").innerHTML = "Hello Universe";
document.getElementById("p2").innerHTML = "Date : " + Date();


function validateform(){
  let b = document.forms["myforms"]["fname"].value;
  if (b == "") {
    alert("this must be filled out");
    return false;
  }
}
function validate(){
  let text8;
  let num = document.getElementById("number").value;
  if (isNaN(num) || num < 1 || num > 10) {
    text8 = "Input is invalid";
  } else {
    text8 = "Input is ok";
  }
  document.getElementById("demo16").innerHTML = text8;
}
document.getElementById("demo16").style.color = "blue";
document.getElementById("demo16").style.fontFamily = "arial";
document.getElementById("demo16").style.fontSize = "3rem";


function myMove(){
    let id = null;
    const elem = document.getElementById("animation");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}





