// 1. Date
const date = new Date(); // date of today

let result = date;
result = date.getTime(); // unixtimestamp.com => 1674478308492

result = date.getDay(); // 1 = Monday
result = date.getFullYear(); // returns current year
result = date.getHours(); // pm format hour
result = date.getMinutes(); // get minutes
result = date.getSeconds();

console.log(result);

// const date = new Date("2023-01-18");
// const date = new Date(2023, 00, 18, 14, 00, 00)
// const date = new Date(94, 04, 08, 08, 00, 00)
// document.getElementById("date").innerHTML = date;


// 2. Comparisons
var n1 = 5; // number
var n2 = 6;
var n3 = 5;
var n4 = "5" // string
// Equal to (==) Variable value
console.log(n1 == n2); // false
console.log(n1 == n3); // true

// Equal to (===) Variable value and variable data type
console.log(n1 == n4); // true, control value only
console.log(n1 === n4); // false, control value and data type

// Not equal to operator (!=)
console.log(n1 != n2); // true

// Not equal operator with double equal symbol (!==) // control value control type
console.log(n1 != n4) // false

// greater than (>)
console.log(n2 > n1) //true
console.log(8 > 10) // false


// less than (<)
console.log(n1 < n2); // true
console.log(8 < 4); // false

// less than or equal
console.log(5 <= 5); // true
console.log(5 <= 3); // false

// greater than or equal
console.log(5 >= 5); // true
console.log(5 <= 10); // false

if (5 <= 10) {
	console.log("Yes")
} else {
	console.log("No")
}

var atilla = 32;
if (atilla > 17) {
	console.log("Free man")
} else {
	console.log("No he's not allowed to drink")
}

// 18-29
// Atilla > 17 and Atilla < 30
if (atilla > 17 && atilla < 30) {
	console.log("He can play football")
} else {
	console.log("No, he is too young or too old")
}

// or operator
// true || false
var x1 = 5;
var x2 = 6;
if (x1 > 4 || x1 < 4) {
	console.log("Yes it's true")
} else {
	console.log("It's not correct");
}

// not operator

// ternary operator
let GetResultOfRules = atilla > 17 ? 'Yes he can drink' : 'No, he is too young'
console.log(GetResultOfRules)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(2 % 2 == 0) // even number

numbers.forEach(function(x){
	if(x%2 == 0){
		console.log(`${x} is an even number`)
	} else{
		console.log(`${x} is an odd number`)
	}
})

// let number = 8;

// document.getElementById("comparisons").innerHTML = (number == 8);

// document.getElementById("comparisons").innerHTML = (number == 18)

// document.getElementById("comparisons").innerHTML = (number == "8"); // why is a string equal?

// 3. Math
// document.getElementById("math").innerHTML = Math.PI

// document.getElementById("math").innerHTML = Math.round(8.8); // nearest INT

// document.getElementById("math").innerHTML = Math.ceil(8.8); // rounded up nearest INT

// document.getElementById("math").innerHTML = Math.floor(8.8); // rounden down nearest INT

// 4. If else
// const hour = new Date().getHours();

// let greeting;

// if (hour < 18) {
// 	greeting = "Good day";
// } else {
// 	greeting = "Good evening";
// }

// document.getElementById("if_else").innerHTML = greeting;
