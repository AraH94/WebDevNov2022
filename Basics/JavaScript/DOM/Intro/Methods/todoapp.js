// Find parentElement<dom prop>

const DeleteItem = document.querySelector('.delete-item');

// console.log(DeleteItem)
// console.log(DeleteItem.parentElement)
// console.log(DeleteItem.parentElement.parentElement)
// console.log(DeleteItem.parentElement.parentElement.parentElement)

// document.body.remove()


// DeleteItem.remove()

const ListOfTodos = document.querySelector('.list-group');

// console.log(ListOfTodos.children.length)

// console.log(document.body.children)

// console.log([1,2,3].length)
// while(ListOfTodos.children.length>0){
//     ListOfTodos.children[0].remove()
// }

console.log(ListOfTodos.firstElementChild)
console.log(ListOfTodos.lastElementChild)
// console.log(ListOfTodos.lastChild.remove())
// ListOfTodos.lastElementChild.remove()

const addTodo1 = document.querySelector('.btn.btn-danger')

// querySelector or querySelectorAll (accepts css selector)


const [addTodo, deleteAllTodos] = document.querySelectorAll('button')

const FirstForm = document.querySelector('.card-body > #todo-form')

// console.log(FirstForm)

// Find list-group-item (li tagname)
const TodoItem = document.querySelector(".list-group-item")

// Clone of list-group-item (li)
const clonedOfTodoItem1 = TodoItem.cloneNode(true); // cloneNode is to take a copy of an element
const clonedOfTodoItem2 = TodoItem.cloneNode();
console.log(clonedOfTodoItem1.hasChildNodes(),
	clonedOfTodoItem2.hasChildNodes()) // hasChildNodes is to know if there are children or not
// clonedOfTodoItem1.childNodes[0].textContent='Javascript';
clonedOfTodoItem1.firstChild.textContent = 'Javascript'; // an other possible way for the first child

console.log(clonedOfTodoItem1.childNodes[0])
ListOfTodos.appendChild(clonedOfTodoItem1)
// ListOfTodos.appendChild(clonedOfTodoItem2)

// DOMString
let parser = new DOMParser(); // build in constructor in js -> parsed from string to node object
let RealNodeObject = parser.parseFromString(`<li class="list-group-item d-flex justify-content-between">
Reactjs
<a href="#" class="delete-item">
	<i class="fa fa-remove"></i>
</a>
</li>`, 'text/html'); // text/html = what data type domstring you want to use 

// alternative way to parse domstring
// createContextualFragment
let parser1 = document.createRange().createContextualFragment(`<li class="list-group-item d-flex justify-content-between">
Nodejs
<a href="#" class="delete-item">
	<i class="fa fa-remove"></i>
</a>
</li>`, 'text/html')

console.log(RealNodeObject.body.firstChild);
console.log(parser1);

// append()
// ListOfTodos.append(RealNodeObject.body.firstChild);
// ListOfTodos.append(parser1);
ListOfTodos.append(RealNodeObject.body.firstChild, parser1)

// .style property
ListOfTodos.lastElementChild.style.backgroundColor = "tomato";
ListOfTodos.lastElementChild.style.color = "white";

// fontsize
ListOfTodos.lastElementChild.style.fontSize = "20pt";
console.log(ListOfTodos.lastElementChild.style);

ListOfTodos.childNodes[ListOfTodos.childNodes.length - 2].style.backgroundColor = "cyan"; // -2 is voorlaatste element en -1 is de laatste element

console.log(ListOfTodos.childNodes.length - 2);

// background-color: salmon; color: white, font-size: 20pt;
ListOfTodos.childNodes[ListOfTodos.childNodes.length - 3].setAttribute
	('style', 'background-color: salmon; color: white; font-size: 20pt');

console.log(ListOfTodos.lastElementChild);

// usage: setTimeout(callback, ms_time)
// 1 second is 1000 miliseconds
// setTimeOut(function(){
// })

// setTimeout(() => {
// 	console.log('Hello world')
// 	ListOfTodos.firstChild.remove()
// 	ListOfTodos.lastElementChild.remove()
// 	ListOfTodos.lastChild.remove()
// }, 5000);

// usage: setInterval(callback, ms_time)
// const RemoveOneByOne = setInterval(() => {
// 	console.log('This is interval')
// 	if (ListOfTodos.children.length > 0) {
// 		ListOfTodos.firstChild.remove()
// 	} else{
// stop interval
// clearInterval(RemoveOneByOne)
// }
// }, 2000);


// addEventListener() => to create html event ('click')
// addEventListener('click', ()=>{});
// event -> object

ListOfTodos.addEventListener('click', (event) => {
	console.log('Hello world', event.target.classList);
	// event.target.remove();
	// console.log(event.target.parentElement.remove());
	// event.target.parentElement.parentElement.remove();
	console.log(event.target.classList.contains('fa-remove'));
	const isRemoved = event.target.classList.contains('fa-remove');

	// contains > true or false
	if (isRemoved) {
		event.target.parentElement.parentElement.remove()
	}
})