class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
  "My car is " + myCar.age(year) + " years old.";


// The code above defines a class called Car with a constructor that takes two parameters: name and year.


// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
const myFather = new Person("John", "Kasuku", 50, "blue");
const myMother = new Person("Nalongo", "Rosemary", 48, "green");

// Display age
document.getElementById("demo1").innerHTML =
"My father is " + myFather.age +"<br>" + " My mother is " + myMother.age + "."; 


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFathers = new Person("John", "Doe", 50, "blue");
document.getElementById("demo2").innerHTML =
"The nationality of my father is " + myFathers.nationality; 

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
}
// Change the language Property
Object.defineProperty(person, "language", {enumerable:false});

// Display all Enumerable Properties
document.getElementById("demo3").innerHTML = Object.keys(person);




// Defining  Getters and Setters
// Create an Object:
const person2 = {firstName:"John", lastName:"Doe"};

// Define a Getter
Object.defineProperty(person, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});

// Display fullName
document.getElementById("demo4").innerHTML = person.fullName;


//counters
// Define an Object
const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo5").innerHTML = obj.counter;


//setter
const person3 = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value;
  },
};

// Set a property using set:
person.lang = "en";

// Display data from the object:
document.getElementById("demo6").innerHTML = person3.language;


//using a function
const person4 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Display data from the object using a method:
document.getElementById("demo7").innerHTML = person4.fullName();


//using a getter
const person5 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
// Display data from the object using a getter:
document.getElementById("demo8").innerHTML = person5.fullName;


//using getter to return the language in uppercase
const person6 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
};
// Display data from the object using a getter:
document.getElementById("demo9").innerHTML = person6.lang;

//using setter to return the language in uppercase
const person7 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};
// Set a property using set:
person7.lang = "en";

// Display data from the object:
document.getElementById("demo10").innerHTML = person7.language;

