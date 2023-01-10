/* Exercise 1 operators */

// 1. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings = 10;
let guests = 20;

// 2. Add snackServings and guests.
let foodStation = snackServings + guests; // snackservings = snackservings+guests
console.log(`The result is ${foodStation}`);

// 3. Subtract guests from snackServings. Then, subtract snackServings from guests.
foodStation = snackServings - guests;
console.log(`The result is ${foodStation}`);
foodStation = guests - snackServings;
console.log(`The result is ${foodStation}`);

// 4. Multiply snackServings and guests.
foodStation = snackServings * guests;
console.log(`The result is ${foodStation}`);

// 5. Divide snackServings by guests.
foodStation = snackServings / guests;
console.log(`The result is ${foodStation}`);

// 6. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drinks = 10;
foodStation = snackServings * guests;
console.log(`The result is ${foodStation}`);
let resultOne = foodStation / drinks;
console.log(`The result is ${resultOne}`);

// 7. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkeys = 15;
let bananas = 9;
result = monkeys / bananas;
console.log(`The result is ${result}`)

// 8. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let monkeyfights = 20;
resultOne = monkeys + bananas;
console.log(`The result is ${resultOne}`);
resultTwo = resultOne * monkeyfights;
console.log(`The result is ${resultTwo}`);

// 9. Increment monkeys.
monkeys++;
console.log(monkeys)

// 10. Decrement bananas.
bananas--;
console.log(bananas);

// 11. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness = bananas - monkeys;
console.log(happiness);
result = happiness + monkeyfights;
console.log(result);

// 12. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
let remainder = resultOne % resultTwo;
console.log(`The remainder is ${remainder}`);

// 13. Create a variable called "orderHasShipped" and set it to false. Create an if statement that checks if orderHasShipped is true. If it is true, console log "The order shipped". If not, console log "The order did not ship".
let oderHasShipped = false;
if (oderHasShipped = true) {
	console.log("The order shipped");
} else{
	console.log("The order did not ship");
}

/*
Exercise 2 data types
boolean/number/string/array/object
*/

// 1. Declare a variable "test" and set it to a boolean value.
var test = false;

// 2. Declare a variable "message" and set it to a string value.
var message = "Hello World";

// 3. Declare a variable "undefinedVariable" and set it to undefined.
var undefinedVariable = undefined;

// 4. Declare a variable "nullVariable" and set it to null.
var nullVariable = null;

// 5. Declare a variable "sampleNumber" and set it to a number value.
var sampleNumber = 8;

// 6. Use the typeof operator to check the type of "sampleNumber".
console.log("sampleNumber is a " + typeof sampleNumber)

// 7. Declare a variable "students" and set it to an empty array.
var student = 0;

// 8. Declare a variable "sampleArray" and set it to an array with 5 elements.
var sampleArray = [0, 1, 2, 3, 4]
console.log(sampleArray);

// 9. Access the 3rd element in "sampleArray".
sampleArray[4] = 5;
console.log(sampleArray);

// 10. Declare a variable "sampleObject" and set it to an object with a property "name" and a value of your name.
sampleObject = {
	name: "Ara" //object
}
console.log(sampleObject)

// 11. Access the "name" property in "sampleObject".
console.log(sampleObject.name)

// 12. Declare a variable "car" and set it to an object with a property "model" and a value of "Honda Civic".
car = {
	model:"Honda Civic"
}
console.log(car)

// 13. Access the "model" property in "car".
console.log(car.model)