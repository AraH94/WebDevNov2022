//add message
console.log('Hello world');

//const variable type
const username = "root";

//username = "admin" //TypeError > can not be updated !

//const username = "intec" //It can not be redeclared

//let variable type
let password; //no error
console.log(password)

password = '123' //no error

// let password = 'abc123' //SyntaxError

console.log(password)

console.log(username)

var a = 1, b = 2, c = 3, d = 4;
var student1 = "Mohammed"
var student2 = "Bilal"
var student3 = "Ara"
var student4 = 'Prince'
console.log(a,b,c,d)
console.log(student1, student2, student3, student4)


var USERNAME = "Atilla" //gloabel variable

function ChangeUsername(user){
	const myUsername = user //local scope variable
	return myUsername
}
console.log(ChangeUsername('Ara'))
console.log(USERNAME)