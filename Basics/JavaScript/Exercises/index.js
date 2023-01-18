let letters = "abcdefghijklmnopqrstuvwxyz";
let msg = [
	70, 111, 108, 108, 111, 119,
	32, 116, 104, 101, 32, 119,
	104, 105, 116, 101, 32, 114,
	97, 98, 98, 105, 116, 46
]

var result;

// 1. write a function that changes letters to utf-16
result = letters.charCodeAt(0);

console.log(result)

// 2. write a function that converts utf-16 to letters
// My answer, but answer downstairs is better, no repetition
// result = String.fromCharCode(70, 111, 108, 108, 111, 119,
// 	32, 116, 104, 101, 32, 119,
// 	104, 105, 116, 101, 32, 114,
// 	97, 98, 98, 105, 116, 46);

function ConvertUtf16ToUtf8(charcodes) {
	let secretMsg = "";
	msg.forEach(function (charcode) {
		secretMsg += String.fromCharCode(charcode)
	})
	return secretMsg
}

result = ConvertUtf16ToUtf8();

console.log(result);

// let students = [];
/*
full_name:"John Doe"
age: 20
email: "johndoe@microsoft.com"
phone: "123-456-7890
address: "123 Main St.
*/
// 3. write a function that adds a student to the students array and displays the students array
let students = [];
students.push({
	full_name: "John Doe",
	age: 20,
	email: "johndoe@microsoft.com",
	phone: "123-456-7890",
	address: "123 Main St."
})

console.log(students)

// 4. write a function that encode a string to base64
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/

const encodedData = btoa("Javascript is fun :)"); // encode a string
console.log(encodedData)

const decodedData = atob(encodedData); // decode the string

console.log(decodedData);


// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
// DisplayArray(SortArray(ConvertStringToArray(names)))
let names = "john, peter, mary, susan, john, mary";

// result = names.sort();

// const btn = document.getElementById('btn');


function ConvertStringToArray(arr) {
	return arr.split(",")
}

function SortArray(arr) {
	return arr.sort()
}

function DisplayArray(arr) {
	return arr
}

// const output = document.getElementById('output');
function DisplayArray(arr) {
	output.innerHTML = "";
	arr.forEach(name => {
		output.innerHTML += `<li> ${name}</i>`
	})
}

function ClickHandler() {
	DisplayArray(SortArray(ConvertStringToArray(names)))
};

