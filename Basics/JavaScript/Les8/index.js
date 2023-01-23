// map() => creates new array in the loop
// forEach => doesn't create a new array
students = ['Ahmad', 'Mehmed', 'Ali', 'Mohammed', 'Arhisa'];

result = students.map(function (name) {
	return name;
})

console.log(result);

// filter()
let scores = [33, 44, 55, 66, 77, 88, 99];

// result = scores.filter(function(score){
// 	return score > 44;
// })

// console.log(result)

const allStudents = [
	{
		name: "John",
		score: 44,
	},
	{
		name: "Jimmy",
		score: 55,
	},
	{
		name: "Michael",
		score: 66,
	},
	{
		name: "Megan",
		score: 77,
	}
]

result = allStudents.filter(function (student) {
	return student.score > 44;
})
console.log(result)

// reduce()
let resultsum = scores.reduce(function(acc, val, init){
	console.log(acc,"accu", val, "value", init, "init")
		return acc + val
})

console.log(resultsum)

// includes
const numbers = [2, 16, 8, 9, 10, 8]
console.log(numbers.includes(8));


// indexOf()
scores = [2, 16, 8, 9, 10, 8]
console.log(scores.indexOf(8, 2));

