// Exercise 1
// Todolist Application exercise

// 1. Create a new todo list

// 2. Add a new todo item

// 3. Remove a todo item
// What is a todo list?
// A todo list is a list of tasks that need to be completed.
// What is a todo item?
// A todo item is a single task that needs to be completed.
// What you require to complete this exercise: 
// 1 . Required array, string and number methods and properties: 
// - push
// - splice
// - findIndex
// - toLowerCase
// - trim
// - length
// - includes
// - indexOf
// - slice

// Explain what you'll do in each step
// 1. Create a new todo list
// - Create a new array
// - Create a new object
// - Add the object to the array
let ToDoList = [];

/* { This is single model object
:: todo: 'javascript"
 completer: false
}
 */

// 2. Add a new todo item
// - Create a new object
// - Add the object to the array

function addToDo(todo) {
	return ToDoList.push(todo)
}
addToDo({
	todo: "Eat",
	completed: false
})
addToDo({
	todo: "Sleep",
	completed: false

})
addToDo({
	todo: "Study",
	completed: true
})
addToDo({
	todo: "Repeat",
	completed: true
})
//console.log(ToDoList);

// 3. Remove a todo item
// - Find the index of the object in the array
// - Remove the object from the array
function removeToDo(todo) {
	let IndexOfToDo = ToDoList.findIndex(function (singleToDo) {
		return singleToDo.todo === todo
	}) // find index (array position number) pf single todo
	// object bij property value
	// console.log(todo, IndexOfToDo)
	return ToDoList.splice(IndexOfToDo, 1) // delete array item
}
//removeToDo("Eat")
//console.log(ToDoList);

// 4. Edit a todo item
// - Find the index of the object in the array
// - Update the object in the array
function editToDo(todo, value, completed) {
	let IndexOfTodo = ToDoList.findIndex(function (singleTodo) {
		return singleTodo.todo === todo
	}) // find index(array position number) of single todo object by property value 

	if (value !== null && value !== '') {
		ToDoList[IndexOfTodo].todo = value // name is function parameter value
	}

	if (completed !== null && completed !== '') {
		ToDoList[IndexOfTodo].completed = completed
	}

	console.log(ToDoList[IndexOfTodo])

}
//editToDo("Study", '', false)



// 5. Delete a todo list
// - Find the index of the object in the array
// - Remove the object from the array


// 6. Display all todo lists
// - Loop through the array
// - Display the object
function displayToDo() {
	ToDoList.forEach(item => {
		console.log(`Title: ${item.todo}\nCompleted: ${item.completed}\n-----------------`);
	})
}
// all todos


// 7. Display a todo list
// - Find the index of the object in the array
// - Display the object
// single todo
// isCompleted is object property
// isCompleted === item.completed
function displayToDos(IsCompleted) {
	let newToDos = ToDoList.filter(item => item.completed === IsCompleted)
	console.log(newToDos); // returns one or many todos by property value (completed > filtered data)
	return newToDos
}
displayToDos(false)
displayToDo()


// Exercise 2
const options = {
	drink: [
		{ name: 'cola', price: 1.0 },
		{ name: 'fanta', price: 1.3 },
		{ name: 'sprite', price: 1.2 },
		{ name: 'water', price: 1.0 },
		{ name: 'coffee', price: 2.3 },
		{ name: 'tea', price: 2.4 },
	],
	fastfood: [
		{ name: 'hamburger', price: 4.0, label: 'halal' },
		{ name: 'cheeseburger', price: 4.3, label: 'non-halal' },
		{ name: 'hotdog', price: 3.5, label: 'halal' },
		{ name: 'fries', price: 4.3, label: 'non-halal' },
		{ name: 'chicken nuggets', price: 5.0, label: 'halal' },
	],
	sauces: [
		{ name: 'ketchup', price: 0.4 },
		{ name: 'mayonnaise', price: 0.4 },
		{ name: 'mustard', price: 0.5 },
		{ name: 'bbq', price: 0.6 },
		{ name: 'garlic', price: 0.6 },
		{ name: 'hot sauce', price: 0.6 },
	]
}

// Create MakeOrder function that takes 3 parameters: drink, fastfood, sauces and returns the total price of the order

// Create displayOrder function that displays the order in the console

// Expected output: You ordered a cola, hamburger with ketchup and the total is 4.5 euro

function MakeOrder(drink, food, sauces) {
	let total_price = 0;
	// return an object with customer's order
	console.log(drink, food, sauces);
	let drink_price = options.drink.find(function (product) {
		return product.name === drink
	})
	total_price += drink_price.price;

	let food_price = options.fastfood.find(function (product) {
		return product.name === food
	})
	total_price += food_price.price;

	let sauces_price = options.sauces.find(function (product) {
		return product.name === sauces
	})
	total_price += sauces_price.price;

	console.log(drink_price, food_price, sauces_price);

	const obj = {
		drink,
		food,
		sauces,
		total_price
	}
	// console.log(obj);
	return obj
}
MakeOrder('cola', 'fries', 'ketchup')


// create a function that can display halal food or non halal food


// You ordered a cola, hamburger with ketchup and the total is 4.5 euro
function displayOrder(order) {
	console.log(`You ordered a ${order.drink}, ${order.food} with ketchup and the total is ${order.total_price} euro`)
}

let order = MakeOrder('cola', 'fries', 'ketchup') // this function returns an object with product names and total_price

displayOrder(order)

// display halal food out
// hint: filter
function ListOfHalalFood(term) {
	return options.fastfood.filter(product => product.label === term)
}

console.log(ListOfHalalFood('non-halal'));
