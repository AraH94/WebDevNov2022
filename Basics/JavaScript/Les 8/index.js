// map() => creates new array in the loop
// forEach => doesn't create a new array
students = ['Ahmad', 'Mehmed', 'Ali', 'Mohammed', 'Arhisa'];

result = students.map(function (name) {
	return name;
})

console.log(result);

// filter()
let scores = [33, 44, 55, 66, 77, 88, 99];

// result = scores.filter(function(score){
// 	return score > 44;
// })

// console.log(result)

const allStudents = [
	{
		name: "John",
		score: 44,
	},
	{
		name: "Jimmy",
		score: 55,
	},
	{
		name: "Michael",
		score: 66,
	},
	{
		name: "Megan",
		score: 77,
	}
]

result = allStudents.filter(function (student) {
	return student.score > 44;
})
console.log(result)

// reduce()
let resultsum = scores.reduce(function(acc, val, init){
	console.log(acc,"accu", val, "value", init, "init")
		return acc + val
})

console.log(resultsum)

// includes
const numbers = [2, 16, 8, 9, 10, 8]
console.log(numbers.includes(8));


// indexOf()
scores = [2, 16, 8, 9, 10, 8]
console.log(scores.indexOf(8, 2));



// 18-01-2023 at home
// Date
const date = new Date(); // date of today
// const date = new Date("2023-01-18");
// const date = new Date(2023, 00, 18, 14, 00, 00)
// const date = new Date(94, 04, 08, 08, 00, 00)
document.getElementById("date").innerHTML = date;

console.log(date);

// Math
document.getElementById("math").innerHTML = Math.PI

document.getElementById("math").innerHTML = Math.round(8.8); // nearest INT

document.getElementById("math").innerHTML = Math.ceil(8.8); // rounded up nearest INT

document.getElementById("math").innerHTML = Math.floor(8.8); // rounden down nearest INT

// Comparisons
let number = 8;

document.getElementById("comparisons").innerHTML = (number == 8);

document.getElementById("comparisons").innerHTML = (number == 18)

document.getElementById("comparisons").innerHTML = (number == "8"); // why is a string equal?

// If else
const hour = new Date().getHours();

let greeting;

if (hour < 18) {
	greeting = "Good day";
} else {
	greeting = "Good evening";
}

document.getElementById("if_else").innerHTML = greeting;


