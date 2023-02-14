// My option -> Also good !! :)
// function Calculator(a, b, op) {
// 	this.number1 = a;
// 	this.number2 = b;
// 	this.operator = op;
// }

// Calculator.prototype.result = function () {
// 	let res;
// 	switch (this.operator) {
// 		case 'add':
// 			res = this.number1 + this.number2;
// 			break;
// 		case 'subtract':
// 			res = this.number1 - this.number2;
// 			break;
// 		case 'multiply':
// 			res = this.number1 * this.number2;
// 			break;
// 		case 'divide':
// 			res = this.number1 / this.number2;
// 			break;
// 		case 'modulo':
// 			res = this.number1 % this.number2;
// 			break;
// 		default:
// 			return 'Select operation'
// 	}
// 	return res;
// }

// let Cal = new Calculator(10, 5, 'add');
// console.log(Cal.result());

// Option teacher
function Calculator(a, b, c) {
	this.number1 = a;
	this.number2 = b;
	this.operator = c;
}

Calculator.prototype.getResult = function () {
	// console.log(this.number1, this.number2, this.operator);
	switch (this.operator) {
		case '+':
			return this.number1 + this.number2;
		case '-':
			return this.number1 - this.number2;
		case '*':
			return this.number1 * this.number2;
		case '/':
			return this.number1 / this.number2;
		case '%':
			return this.number1 % this.number2;
	}
}


let math = new Calculator(10, 5, '%')
// console.log(math, typeof math);
console.log(math.getResult());