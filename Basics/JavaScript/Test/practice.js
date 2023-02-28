// Data Types
// let x = 25e8;
// console.log(x);

// let y = 864e-8;
// console.log(y);

// Object
// const person = {
// 	firstname: 'Ara',
// 	lastName: 'Hoedemakers',
// 	age: 28
// };
// document.getElementById("demo").innerHTML = person.firstname + " " + person.lastName + " is " + person.age + " years old";

// Array
// const cars = ['Renault', 'Jeep', 'Chevrolet'];
// console.log(cars)
// document.getElementById("demo").innerHTML = cars[1];

// Function
// function person(name, age) {
// 	let result = name + age;
// 	console.log(result)
// return name + age; // for html
// }
// document.getElementById("demo").innerHTML = person("Ara ", 28)
// person("Ara ", 28);

// Function return
// function FirstName() {
// 	return "Ara ";
// }

// function LastName() {
// 	return "Hoedemakers"
// }

// function Fullname() {
// 	return FirstName() + LastName()
// }
// console.log(Fullname());

// Create an object
const personInfo = {
	firstName: 'Ara',
	lastName: 'Hoedemakers',
	age: 28,
	homeTown: 'Maaseik',
	fullname: function () {
		return this.firstName + " " + this.lastName
	}
}
console.log(personInfo.fullname());

// Object constructors
function Animal(first, last, age, color, type) {
	this.firstName = first,
		this.lastName = last,
		this.ageAnimal = age,
		this.colorAnimal = color,
		this.typeOfAnimal = type,
		this.changeName = function (name) {
			this.firstName = name;
		}
}

Animal.prototype.nationality = "Belgian";

let myDog = new Animal('Adobo', 'Pinoy', 2, 'lightbrown', 'pomeranian');
let myCat = new Animal('Frisky', 'Pinay', 1, 'blackandwhite', 'mainecoon');

// Using protype to add new property to constructor


// Add property to object
myDog.gender = "male"

// Add a method to object
myDog.fullName = function () {
	return this.firstName + " " + this.lastName
}

// Change first name
myDog.changeName("Pusit");

console.log(myDog.nationality)

console.log("My dogs name is " + myDog.firstName + " and is a " + myDog.gender + " and my cats name is " + myCat.firstName);
// document.getElementById("demo").innerHTML = "My dogs name is " + myDog.firstName + " and my cats name is " + myCat.firstName

// Events onclick
// function displayDate() {
// 	document.getElementById("demo").innerHTML = Date();
// }

// String methods
// length
// let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(a.length);

// slice()
let b = "Mango, Lychee, Cherry"
// console.log(b.slice(7, 13)); // output Lychee
// console.log(b.slice(-6,)); // output Cherry

// substring()
// console.log(b.substring(7, 13)); // output Lychee

// substr()
// console.log(b.substr(7, 6)); // output Lychee

// replace()
function myFunction() {
	// 	let text = document.getElementById("demo").innerHTML;
	// 	document.getElementById("demo").innerHTML = text.replace("Hasselt", "Maaseik");
	let place = "Let's visit Hasselt";
	// let newPlace = place.replace("Hasselt", "Maaseik")
	console.log(place.replace("Hasselt", "Maaseik"))
}

// replaceAll()
// let text = document.getElementById("demo").innerHTML;
// text = text.replaceAll(/Cats/g, "Dogs");
// text = text.replaceAll(/cats/g, "dogs");
// document.getElementById("demo").innerHTML = text;

// toUpperCase()
let text1 = 'Javascript'
console.log(text1.toUpperCase());

// toUpperCase()
text1 = 'Javascript'
console.log(text1.toLowerCase());

// concat()
let text2 = "Hello";
let text3 = "World";
console.log(text2.concat(" " + text3));

// trim()
text2 = "     Hello World     ";
text3 = text2.trim();
console.log(text3);
console.log("The lengt of text2 is " + text2.length + " and the length of text3 is " + text3.length);

// trimStart()
text2 = "     Hello World     ";
text3 = text2.trimStart();
console.log(text3);
console.log("The lengt of text2 is " + text2.length + " and the length of text3 is " + text3.length);

// trimEnd()
text2 = "     Hello World     ";
text3 = text2.trimEnd();
console.log(text3);
console.log("The lengt of text2 is " + text2.length + " and the length of text3 is " + text3.length);

// padStart()
let number = "5";
console.log(number.padStart(8, "0"));

// padEnd()
number = "8";
console.log(number.padEnd(8, "s"));

// charAt()
let word = "Harry Potter"
console.log(word.charAt(8)); // returns character (letter)

// charCodeAt()
console.log(word.charCodeAt(8)); // returns unicode of character (ascii-tabel)

// split()
let word1 = "I like learning javascript";
console.log(word1.split(","));

// Number methods
console.log(Number(true));
console.log(Number(false));
console.log(Number("8.8"));
console.log(Number("8,8"));
console.log(Number("Ara"));

let date = new Date("2023-22-02")
console.log(Number(date));

// Array
let list = ["Bread", "Eggs", "Milk"]
console.log(list[0]);

list[1] = "Shampoo"
console.log(list.length);
console.log(list[list.length - 1]);

// let text = " "
// for (let i = 0; i < list.length ; i++){
// text += " " + list[i]
// } console.log(text)

list.push("Fruit", "Vegetables");
console.log(list);

// Convert arrays to strings
console.log(list.toString());
console.log(list.join(" - "));

// shift() -> removes first array element
console.log(list.shift());
console.log(list);

// pop() -> removes the last item from an array
console.log(list.pop())
console.log(list)

// unshift() -> adds new element to array (beginning)
console.log(list.unshift("Mayonaise"));
console.log(list);

// push() -> adds new element to an array (at the end)
console.log(list.push("Ketchup"));
console.log(list);

// add element to end of an array
list[list.length] = "Cucumber";
console.log(list);

// concat() -> create new array by merging existing arrays
let girlsName = ["Viola", "Brianna", "Brooke"];
let boysName = ["Alexander", "Nathan", "Jonas"];
let otherName = ["Olivia", "Joey"]

let names = girlsName.concat(boysName, otherName);
console.log(names)

names = girlsName.concat("Peyton");
console.log(names);

// splice() -> add new items to an array, can be in the middle
names.splice(2, 0, "Ann", "Dirk");
console.log(names);

// remove items
names.splice(2, 2);
console.log(names);

// slice() -> slices out a piece of an array into a new array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus)
console.log(fruits.slice(2)); // verwijdert eerste 2 elementen

console.log(fruits.slice(1, 3)); // verwijdert de 1ste in de array en vanaf de 4de

// sort() 
console.log(fruits.sort()); // alfabetisch

console.log(fruits.reverse()); // omgekeerd alfabetisch

// sort numbers
const points = [8, 17, 98, 64, 88, 37]
points.sort(function (a, b) {
	return a - b
})
console.log(points); // descending

points.sort(function (a, b) {
	return b - a
})
console.log(points); // ascending

// forEach() -> call a function once for each array element
const numbers = [8, 17, 98, 64, 88, 37]
numbers.forEach(function (value) {
	console.log(value);
});

// map() -> creates a new array by performing a function on each array element
const numbers2 = numbers.map(function (value) {
	return value * 2
});
console.log(numbers2)

// filter() -> creates new array with array elements that pass a test 
const over18 = numbers.filter(function (value) {
	return value > 18
});
console.log(over18)

// reduce() -> runs a function on each array element to produce (reduce it to) a single value
const sum = numbers.reduce(function (total, value) {
	return total + value;
});
console.log(sum);

// every() -> checks if all array values pass a test
let allOver18 = numbers.every(function (value) {
	return value > 18; // returns false but with 7 returns true
})
console.log(allOver18);

// some() -> method checks if some array values pass a test
let someOver18 = numbers.some(function (value) {
	return value > 18;
})
console.log(someOver18);

// indexOf() -> returns position number
const fruits1 = ["Apple", "Banana", "Orange", "Lemon", "Apple", "Mango"];
let position = fruits1.indexOf("Lemon");
console.log(position);

position = fruits1.lastIndexOf("Apple");
console.log(position);

// find() -> returns the value of the first array element that passes a test function
const numbers3 = [8, 17, 98, 64, 88, 37]
let first = numbers.find(function (value) {
	return value > 18;
})
console.log(first); // klopt niet

// includes() -> checks if an element is present in an array
console.log(fruits1.includes("Mango"));

// date
const date1 = new Date();
console.log(date1);

const date2 = new Date("1994-05-08");
console.log(date2);

const date3 = new Date(2023, 01, 12, 08, 30, 48, 372);
console.log(date3.setFullYear());

const date4 = new Date();
date4.setFullYear(2023, 01, 12);
console.log(date4);

// Math
// round() -> returns the nearest integer
let math = Math.round(4.6);
math = Math.round(4.4);
math = Math.round(4.5);

// ceil() -> returns the value of x rounded up to its nearest integer
math = Math.ceil(4.5)
math = Math.ceil(-4.5)

// floor() -> returns the value of x rounded down to its nearest integer
math = Math.floor(4.9);

// trunc() -> returns the integer part of x
math = Math.trunc(6.8);
math = Math.trunc(-2.8);

// sign() -> returns if x is negative, null or positive
math = Math.sign(4.4);
math = Math.sign(-5.8);

// pow() -> returns the value of x to the power of y
math = Math.pow(4, 2);

console.log(math)

// min() and max() can be used to find the lowest or highest value in a list of arguments
let min = Math.min(0, 150, 30, 20, -8, -200);
console.log(min);

let max = Math.max(0, 150, 30, 20, -8, -200);
console.log(max);

// random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random());

// Comparisons
// Conditional (Ternary) operator
// syntax -> variablename = (condition) ? value1:value2 
let age = 18;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);

let age1 = 21;
let gamble = (age1 < 21) ? "Too young to gamble" : "Old enough to gamble";
console.log(gamble);

// Functions
const x = function (a, b) {
	return a * b
}
console.log(x(8, 8));

// OR Arrow functions (shorter)

const y = (a, b) => a * b;
console.log(y(4, 2));

// for loop
function countSelected(selectObject){
	let numberSelected=0;
	for(i = 0; i < selectObject.options.length; i++){
		if(selectObject.options[i].selected){
			numberSelected++
		}
	}
	return numberSelected;
}
console.log();

// for of and for in
let usernames = ['mohammed','ahmad','bilal','arhisa','nina','hande'];

for(let i of usernames){
	console.log(i);
}

let student = {
    name:"Ara",
    email:"arahoedemakers@hotmail.com",
    age:28
}

for (let i in student){
	console.log(student[i]);
}