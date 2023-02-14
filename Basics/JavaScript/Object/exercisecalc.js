// multiply > constructor method
// subtract > constructor method
// add > constructor method
// divide > constructor method
// Constructor: a, b >>> Constructor params

function Calculator(a, b) {
	this.number1 = a;
	this.number2 = b;

	//Option 1
	// this.multiply = function () {
	// 	return `Result is ${this.number1 * this.number2}`
	// }
	// this.subtract = function () {
	// 	return `Result is ${this.number1 - this.number2}`
	// }
	// this.add = function () {
	// 	return `Result is ${this.number1 + this.number2}`
	// }
	// this.divide = function () {
	// 	return `Result is ${this.number1 / this.number2}`
	// }
}

// Option 2 (old school)
Calculator.prototype.multiply = function () {
	return `Result is ${this.number1 * this.number2}`;
}
Calculator.prototype.subtract = function () {
	return `Result is ${this.number1 - this.number2}`;
}
Calculator.prototype.add = function () {
	return `Result is ${this.number1 + this.number2}`;
}
Calculator.prototype.divide = function () {
	return `Result is ${this.number1 / this.number2}`;
}

let op1 = new Calculator(10, 5); // and object from constructor

console.log(op1.multiply());
console.log(op1.subtract());
console.log(op1.add());
console.log(op1.divide());