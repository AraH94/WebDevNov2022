const todoInput = document.getElementById('todoInput');

const todoList = document.getElementById('todolist');

// todoList.innerHTML="Hallo"
// todoInput.value= "Hii"

// let todos = []

// function TodoApplication(title) {
// 	this.todotitle = title;
// 	this.todos = [];
// 	this.addTodo = function () {
// 		return this.todos.push(this.todotitle)
// 	}
// }

// create-init an object using TodoApplication constructor
// const app = new TodoApplication('React.js'); // obejct init
// console.log(app.addTodo());
// console.log(todos);

// const app1 = {
// 	title: 'React.js'
// } 
// todos.push(app1)

function TodoApplication() {
	this.todos = []
	this.addTodo = function (title) {
		return this.todos.push({ title })
	}

	this.displayTodos = function () {
		todoList.innerHTML = "";
		this.todos.forEach(todo => {
			console.log(todo)
			todoList.innerHTML += `<li class="list-group-item">${todo.title}</li>`
		})
	}

	this.ClickHandler = function () {
		console.log('Hello function');
		console.log(todoInput.value);
		if (todoInput.value !== "") {
			this.addTodo(todoInput.value) // Step 1 - insert it 
		} else {
			alert('Please fill the input field !!!')
		}
		this.displayTodos() // Step 2 - print them all
		todoInput.value = "" // Step 3 - clean input field
	}

	this.KeyDownHandler = function (event) {
		console.log(event);
	}

}
// TodoApplication.prototype.multiply=(a,b)=>a+b

const app = new TodoApplication();
// app.addTodo('Learn javascript');
// app.addTodo('Learn react.js');
// app.addTodo('Learn node.js');
// app.addTodo('Learn c++');
// app.displayTodos();
// app.ClickHandler();

todoInput.addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
		// console.log("You've pressed Enter !"), todoInput.value
		app.ClickHandler()
	}
})