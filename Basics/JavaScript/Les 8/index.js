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

if (hour < 18){
	greeting = "Good day";
} else{
	greeting = "Good evening";
}

document.getElementById("if_else").innerHTML = greeting;


