// 1. Generate from 1 to 100
// print the even numbers in an array
// if / for loop / /push()

let oddNumbers = [];
for (let numbers = 1; numbers <= 100; numbers++) {
	// console.log(numbers)
	// % 2 !== > odd numbers
	// % 2 == > even numbers
	if (numbers % 2 !== 0) {
		oddNumbers.push(numbers) // inserted odd numbers in array
	}
}
console.log(oddNumbers) // show in array
