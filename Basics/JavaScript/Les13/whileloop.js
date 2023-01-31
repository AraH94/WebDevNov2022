// let age = 20;
// let i = 0;

// while (i <= 20) {
// do something here
// 	console.log(i);
// 	i++;

// let numbers = [44, 55, 66, 77, 88, 99];
// let index = 0;

// while (index < numbers.length){
// console.log(numbers[index])
// 	index++;
// }

// let students = [{
// 	id: 1,
// 	name: 'John',
// 	email: 'john@microsoft.com'
// }, {
// 	id: 2,
// 	name: 'John1',
// 	email: 'john2@microsoft.com'
// }, {
// 	id: 3,
// 	name: 'John2',
// 	email: 'john2@microsoft.com'
// }
// ]

// let index = 0;
// while (index < students.length) {
// 	console.log(students[index].name);
// 	index++;
// }


// 2. do while loop
// var index = 0;
// var endPoint = 10;

// do {
// 	console.log(index, 'this is do while');
// 	index++
// } while (index < endPoint);

function BipBip() {
	console.log("Runnnn");
}

var index = 2;
var endPoint = 2;
while (index < endPoint) {
	BipBip();
	index++;
}
// index < endpoint > false
do {
	BipBip()
	index++
} while (index < endPoint)