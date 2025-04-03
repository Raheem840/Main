//Adding a string and a number
let x = 16 + "Volvo";
document.getElementById("demo1").innerHTML = x + "<br>";

x = "Volvo" + 16;
document.getElementById("demo1").innerHTML = x + "<br>" + "<br>";




//JavaScript evaluates expressions from left to right
let y = 16 + 4 + "Volvo";
document.getElementById("demo2").innerHTML = y + "<br>" + "<br>";


//Javascript datatypes
//strings
let carName1 = "Volvo XC60";
let carName2 = "Volvo XC60";

document.getElementById("demo3").innerHTML =
  carName1 + "<br>" + carName2 + "<br>" + "<br>";


// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

document.getElementById("demo4").innerHTML =
  answer1 + "<br>" + answer2 + "<br>" + answer3 + "<br>";


//Numbers
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;
let x3 = 3.14;

document.getElementById("demo5").innerHTML =
  x1 + "<br>" + x2 + "<br>" + x3 + "<br>";


//exponential notation
let w = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
document.getElementById("demo6").innerHTML = w + "<br>" + z + "<br>";

//Javascript Bigint
let big = BigInt("1234567890123474857937956290490");
document.getElementById("demo7").innerHTML = big + "<br>";


//Javascript boolean
let bool1 = 5;
let bool2 = 5;
let bool3 = 6;

document.getElementById("demo8").innerHTML =
  (bool1 == bool2) + "<br>" + (bool1 == bool2) + "<br>";

//Javascript arrays
const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("demo9").innerHTML = cars[0] + "<br>";



//Javascript objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

document.getElementById("demo10").innerHTML =
  person.firstName + " is " + person.age + " years old." + "<br>";

//Js typeof operator
document.getElementById("demo11").innerHTML =
  typeof "" + "<br>" + typeof "John" + "<br>" + typeof "John Damulira" + "<br>";

document.getElementById("demo12").innerHTML =
  typeof 0 +
  "<br>" +
  typeof 314 +
  "<br>" +
  typeof 3.14 +
  "<br>" +
  typeof 3 +
  "<br>" +
  typeof (3 + 4) +
  "<br>";


let car;
document.getElementById("demo13").innerHTML =
  car + "<br>" + typeof car + "<br>";  


let car_ = "Volvo";
car_ = undefined;

document.getElementById("demo14").innerHTML =
  "<p>The value of car is " +
  car_ +
  "<p>The typeof car is " +
  typeof car_ +
  "<br>";


let car_2 = "";

document.getElementById("demo15").innerHTML =
  "The value is: " + car + "<br>" + "The type is: " + typeof car_2 + "<br>";

  //Javascripy object
  // Create an Object
const person_1 = new Object();
person.firstName = "John";
person.lastName = "Damulira";
person.age = 50;
person.eyeColor = "blue"; 

// Diplay Object Content
document.getElementById("demo16").innerHTML =
person.firstName + " is " + person.age + " years old." +"<br>";

// Create an Object
const person_2 = {
  firstName: "John",
  lastName: "Damulira",
  age:50,
  eyeColor: "blue"
};

// Create a Copy
const x_1 = person;

// Change Age
x_1.age = 10;

document.getElementById("demo").innerHTML =
person_2.firstName + " is " + person_2.age + " years old." + "<br>";




