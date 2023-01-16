/* Exercise for string/number/array methods */

var students = ["John", "Jane", "Jim", "Jill", "Jack", "Jenny", "Jeremy", "Jasmine", "Jody", "Jen"];

// 1. Find the length of students array, and store it in a variable called "numberOfStudents".
var numberOfStudents = students.length;
console.log(numberOfStudents)

// 2. Find the first element of students array, and store it in a variable called "firstStudent".
var firstStudent = students[0];
console.log(firstStudent);

// 3. Find the last element of students array, and store it in a variable called "lastStudent".
var lastStudent = students[students.length - 1];
console.log(lastStudent);

// 4. Find the middle element of students array, and store it in a variable called "middleStudent". Hint: If the length of the array is even there is no single middle element. In that case, find the two elements that are in the middle and store them in an array called "middleStudents".
let middleStudent = []

if (students.length % 2 === 0) {
	middleStudent.push(students[((students.length) / 2) - 1])
	middleStudent.push(students[(students.length) / 2])
}
console.log(middleStudent)


var ages = [18, 35, 12, 24];
// 5. Find the first element of ages array, and store it in a variable called "firstAge".
var firstAge = ages[0];
console.log(firstAge);

// 6. Find the last element of ages array, and store it in a variable called "lastAge".
var lastAge = ages[ages.length - 1];
console.log(lastAge);

// 7. Find the middle element of ages array, and store it in a variable called "middleAge". Hint: If the length of the array is even there is no single middle element. In that case, find the two elements that are in the middle and store them in an array called "middleAges".
let middleAge = []

if (ages.length % 2 === 0) {
	middleAge.push(ages[((ages.length) / 2) - 1])
	middleAge.push(ages[(ages.length) / 2])
}
console.log(middleAge)


var stringToAarray = "Split me into an array";
// 8. Split stringToAarray variable into an array called "arrayFromString". Print arrayFromString to the console.
let arrayFromString = stringToAarray.split(" ");
console.log(arrayFromString)

var letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"; // convert it to array list
// 9. Split letters variable into an array called "arrayFromLetters". Print arrayFromLetters to the console.
let arrayFromLetters = letters.split("");
console.log(arrayFromLetters);

var names = "john-jane-jim-jill-jack-jenny-jeremy-jasmine-jody-jen"; // convert it to array list
// 10. Split names variable into an array called "arrayFromNames". Print arrayFromNames to the console.
let arrayFromNames = names.split("-");
console.log(arrayFromNames);

var salary = 20023.45 // round it to two decimal places
// 11. Round salary variable to two decimal places and store it in a variable called "roundedSalary". Print roundedSalary to the console.

var brutoSalary = 20000 // calculate the net salary (net salary is bruto salary - 20% tax)
// 12. Calculate the net salary (net salary is bruto salary - 20% tax) and store it in a variable called "netSalary". Print netSalary to the console.


