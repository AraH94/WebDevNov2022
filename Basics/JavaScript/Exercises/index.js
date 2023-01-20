// 1. write a function that changes letters to utf-16
// result = letters.charCodeAt(0);
// console.log(result)
let letters = "abcdefghijklmnopqrstuvwxyz";

function ConvertLettersToUtf16(str) {
	// convert str data to arraylist
	let arr = str.split("") // string method
	const encoded = []
	// loop the array forEach() // array methond
	arr.forEach(function (letter) {
		encoded.push(letter.charCodeAt()) // utf-16 
	})
	return encoded;
}

console.log(ConvertLettersToUtf16(letters));

// 2. write a function that converts utf-16 to letters
let msg = [
	70, 111, 108, 108, 111, 119,
	32, 116, 104, 101, 32, 119,
	104, 105, 116, 101, 32, 114,
	97, 98, 98, 105, 116, 46
]

// My answer, but answer downstairs is better, no repetition
// result = String.fromCharCode(70, 111, 108, 108, 111, 119,
// 	32, 116, 104, 101, 32, 119,
// 	104, 105, 116, 101, 32, 114,
// 	97, 98, 98, 105, 116, 46);

// Option 1
function ConvertUtf16ToUtf8(charcodes) {
	let message = "";
	msg.forEach(function (charcode) {
		message += String.fromCharCode(charcode)
	})
	return message
}

result = ConvertUtf16ToUtf8();

console.log(result);

// 3. write a function that adds a student to the students array and displays the students array
let students = [];
/*
full_name:"John Doe"
age: 20
email: "johndoe@microsoft.com"
phone: "123-456-7890
address: "123 Main St.
*/
function AddStudent(obj) {
	students.push(obj)
	return students;
}

let student1 = AddStudent({
	id: 1,
	name: "Michael Jackson",
	email: "michael@microsoft.com"
})
console.log(student1)

// 4. write a function that encode a string to base64
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/

// Option 1
// function EncryptString(str) {
// 	let encoded = btoa(str)
// 	console.log(encoded)
// }

// function DecryptString(encoded) {
// 	let decoded = atob(encoded);
// 	console.log(decoded)
// }

// EncryptString("Javascript is fun :)")
// DecryptString("SmF2YXNjcmlwdCBpcyBmdW4gOik=")

// Option 2
const base64Tool = {
	Encrypt: function (str) {
		let decoded = btoa(str);
		console.log(decoded)
	},
	Decrypt: function (encoded) {
		let decoded = atob(encoded);
		console.log(decoded)
	}
}

base64Tool.Encrypt("Javascript is fun :)")
base64Tool.Decrypt("SmF2YXNjcmlwdCBpcyBmdW4gOik=")

// const encodedData = btoa("Javascript is fun :)"); // encode a string
// console.log(encodedData)

// const decodedData = atob(encodedData); // decode the string

// console.log(decodedData);


// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
// DisplayArray(SortArray(ConvertStringToArray(names)))
let names = "john, peter, mary, susan, john, mary";

function ConvertStringToArray(arr) {
	let str = arr.split(",");
	let names = []
	str.forEach(function (name) {
		names.push(name.trim())
	})
	return names
}

function SortArray(arr) {
	return arr.sort()
}

const output = document.getElementById('output')
function DisplayArray(arr) {
	output.innerHTML = "";
	arr.forEach(function (name) {
		output.innerHTML += `<li>${name}</i>`
	})
}

// console.log(DisplayArray(SortArray(ConvertStringToArray(names))))

function ClickHandler() {
	DisplayArray(SortArray(ConvertStringToArray(names)))
}

