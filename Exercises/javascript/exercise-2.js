/* Exercise 3 functions */

// 1. Create a function called "add" that takes two arguments (parameters named "first" and "second") and returns their sum.
function add(first, second) {
	return first + second
}
console.log(add(8, 8));

// 2. Create a function called "subtract" that takes two arguments (parameters named "first" and "second") and returns their difference.
function substract(first, second) {
	return first - second
}
console.log(substract(16, 8));

// 3. Create a function called "multiply" that takes two arguments and returns their product.
function multiply(first, second) {
	return first * second
}
console.log(multiply(8, 8));

// 4. Create a function called "divide" that takes two arguments and returns their quotient.
function divide(first, second) {
	return first / second
}
console.log(divide(16, 8));

// 5. Create a function called "calculate" that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
function calculate(n1, op, n2) {
	const result = `${n1} ${op} ${n2}`
	return eval(result)
}
console.log(calculate(4, '*', 4))

// 6. Call the calculate function 4 times, each time using one of the operation functions you wrote
console.log(calculate(8, '+', 8))
console.log(calculate(8, '-', 8))
console.log(calculate(8, '*', 8))
console.log(calculate(8, '/', 8))

// 7. Create a function called "printDay" that takes one argument (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday etc.)
function printDay(d1) {
	switch (d1) {
		case 0:
		return "Sunday";
		break;
	}
	switch (d1) {
		case 1:
		return "Monday";
		break;
	}switch (d1) {
		case 2:
		return "Tuesday";
		break;
	}switch (d1) {
		case 3:
		return "Wednesday";
		break;
	}switch (d1) {
		case 4:
		return "Thursday";
		break;
	}switch (d1) {
		case 5:
		return "Friday"
		break;
	}switch (d1) {
		case 6:
		return "Saturday";
		break;
	}
}
console.log(printDay(5));

