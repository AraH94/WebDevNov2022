const TodoInput = document.querySelector('#todo'); // id
const AddTodoBtn = document.querySelector('.btn-danger'); // className
const Listgroup = document.querySelector('.list-group');
const DeleteAllToDos = document.querySelector('#clear-todos');

// Click event
// AddTodoBtn.addEventListener('click', function (e) {
// 	console.log('Hello World')
// 	e.preventDefault(); // prevent default settings
// })

// Input event (change)
// TodoInput.addEventListener('change', function () {
// 	console.log('Hello dude')
// }) // onchange

// Keydown event (one of input events)
// TodoInput.addEventListener('keydown', function (e) {
// 	if (e.key === 'Enter') {
// 		console.log('Hello Joe');
// 	}
// })

// Exercise 1: Enter or click a item to the todo list and delete it
// Keydown and click event
// Add new todo into list-group
// function TodoList(todo) {
// 	let parser1 = document.createRange().createContextualFragment
// 		(`<li class="list-group-item d-flex justify-content-between">
// ${todo}
// <a href = "#" class ="delete-item">
// 	<i class = "fa fa-remove"></i>
// </a>
// </li>`);
// 	Listgroup.appendChild(parser1)
// }

// AddTodoBtn.addEventListener('click', function (e) {
// 	e.preventDefault() // zorgt ervoor dat je item getoond wordt, anders verdwijnt deze na enkele seconden
// 	console.log('Hello World');
// 	const isEmpty = EmptyInput()
// 	if (isEmpty) { // if it's true it will execute this code
// 		TodoList(todo.value)
// 	} else { // if it's false it will show the alert box
// 		alert("Please insert your To Do");
// 	}
// 	todo.value = ""
// })

// TodoInput.addEventListener('keydown', function (e) {
// 	if (e.key == 'Enter') {
// 		console.log('How are you?')
// 		console.log(EmptyInput())
// 		TodoList(todo.value)
// 		todo.value = ""
// 	}
// })

// DeleteAllToDos.addEventListener('click', function (e) {

// 	console.log('List is deleted');
// 	console.log(Listgroup.children[0] ? true : false) // as long as your listgroup is empty it will return false, if it's filled up it will return true, than it will execute the while loop
// Listgroup.firstElementChild.remove()
// while (Listgroup.children[0]) { // runs the code until the condition returns false, if it's true it will keep on going
// 	console.log('sdfsdfsdfsdfsdfsdf')
// 	Listgroup.firstElementChild.remove()
// }
// 	Array.from(Listgroup.children).forEach(el => el.remove()) // Option 2: convert your listgroup first in an array, cause a list group is not an array
// })

// function EmptyInput() {
// if (TodoInput === "") {
// 	alert("Please insert your To Do");
// } return
// 	if (TodoInput.value == "") {
// 		return false
// 	} else {
// 		return true
// 	}
// }


// Event: double click
AddTodoBtn.addEventListener('dblclick', (e) => {
	console.log('I double clicked the button');
	e.preventDefault
})

// Event: mousedown => je muis ingeklikt houden
AddTodoBtn.addEventListener('mousedown', (e) => {
	console.log('Mousedown event');
	console.log(e);
})

// Difference with click is that it will show when you release the mouse
AddTodoBtn.addEventListener('click', (e) => {
	console.log('Click event');
	console.log(e);
})

// Event: mouseup (same as click)
AddTodoBtn.addEventListener('mouseup', (e) => {
	console.log('Mouseup event');
})

// Event: mousemove
AddTodoBtn.addEventListener('mousemove', (e) => {
	console.log('Mousemove event');
})

// Event: mouseover
AddTodoBtn.addEventListener('mouseover', (e) => {
	console.log('Mouseover event');
})

// Event: mouseout
AddTodoBtn.addEventListener('mouseout', (e) => {
	console.log('Mouseout event');
})


// Keyboard events
// KeyUp
TodoInput.addEventListener('keyup', (e) => {
	console.log('This is keyup event');
	console.log(e.key);
})

// KeyDown
TodoInput.addEventListener('keydown', (e) => {
	console.log('This is keydown event');
	console.log(e.key);
})

// KeyPress
TodoInput.addEventListener('keypress', (e) => {
	console.log('This is keypress event');
	console.log(e.key);
})

// Document events
// DOMContentLoaded => when your page is loaded, than it will show DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => { // DOMContent has no parameter
	let parser = new DOMParser();
	console.log('This is DOMContentLoaded')
	// retrieves data from data.jso file
	fetch('data.json')
		.then(result => result.json())
		.then(data => {
			data.db.forEach(todoObj => {
				// convert DOMString to node element
				let todo = parser.parseFromString(`<li class="list-group-item d-flex justify-content-between">
			${todoObj.title}
			<a href = "#" class ="delete-item">
				<i class = "fa fa-remove"></i>
			</a>
		</li>`, 'text/html')

				// append node element into listoftodos(ul)
				Listgroup.appendChild(todo.body.firstChild)
			})
		})

})