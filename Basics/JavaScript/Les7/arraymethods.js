var students = ['Ara', 'Bilal', 'Mohammed', 'Ahmad', 'Nina', 'Prince', 'Zana', 'Serine', 'Axel'];

var result;

// toString()
result = students.toString(); // string data type

// join() => returns string data
result = students.join("~");

// push() => Add new value into array
students.push('John');
students.push(true);
students.push(20);
students.push({
	id: 1,
	name: "Jimmy"
})

// pop() => remove an item from array list
students.pop();

// shift() => remove first value/item from array list
students.shift();

// unshift() => insert value at the beginning of an array => first item
students.unshift('Ara');

// update array list
students[0] = 'Arhisa';

// length - size of arraylist
result = students.length;

delete students[9];

result = students;

// concat();
var n1 = [1, 2, 3];
var n2 = [4, 5, 6];
console.log(n1.concat(n2));
// var str1 = "hello";
// var str2 = "world";
// console.log(str1.concat(str2));
// students.splice(8,4,"New Student name");
students.push("John Doe");
students.push("Michael");
// students.splice(6, students.length-6, "Hello world")

// students.splice(5, 3)
result = students;

// slice()
let newArrayList = students.slice(4, 7);
result = newArrayList;

// reverse()
result = newArrayList.reverse();

// sort()
result = students.sort();

var numbers = [8, 58, 88, 18, 38, 888, 28];
result = numbers.sort(function (a, b) { // (x, y) is also possible
	return a - b
})

// forEach method =>
students.forEach(function(value, index){
	console.log(`ID: ${index}\nValue: ${value}`)
})

console.log(`Result is\n${result}\n type of data is ${typeof result}`);
// console.log(students[12]);
