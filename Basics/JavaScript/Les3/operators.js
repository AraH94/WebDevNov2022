// Javascript operators

// Assignment operator (=)
var name = 'Ahmed';
const age = 25;

// Additional operator (+)
var number1 = 5;
var number2 = 6;
var GetSumOfNumbers = number1 + number2; // (GetSumOfNumbers = 5 + 6) => 11
console.log(`Result is ${GetSumOfNumbers}`)
console.log("Result is " + GetSumOfNumbers)
// ` - ' - "

var firstname = "John ";
var lastname = "Doe";
var fullname = firstname + lastname;
console.log(fullname);

var n1 = "1"; // string
var n2 = 3; // number
var result = n1 + n2; // 13
console.log(typeof result)

var n3 = 5;
var n4 = 5;
var result = n3 * n4;
console.log(result);

// Subtraction operator (-)
var n1 = 10;
var n2 = 6;
var result = n2 - n1;
console.log(result);

// + - * / (bruto * 100)/tax
var bruto = 3000;
var tax = 40;
var netto = bruto / 100 * tax;
var result = bruto - result;
console.log(`Tax is ${netto}\nNetto Salary is ${result}`);

var agePerson = 30;
/* Increment operator (++) */
agePerson++; // increase +1 -- first way
agePerson = agePerson + 1; // increase +1 -- second way

/* Decrement operator (--) */
agePerson--;
agePerson = agePerson - 1; // decrease -1

console.log(agePerson)

var firstname = "Michael ";
var lastname = "Jackson";

// firstname += lastname;
// var fullname = firstname + lastname;
// console.log(fullname);

firstname += lastname; // firstname = firstname + lastname;

console.log(firstname);

var n1 = 5;
var n2 = 6;

// var result = n1 + n2;

n1 += n2; // n1 = n1 + n2;
console.log(n1);

n1 -= n2 // n1 = n1 - n2;
n1 *= n2 // n1 = n1 * n2;
n1 /= n2 // n1 = n1 / n2;