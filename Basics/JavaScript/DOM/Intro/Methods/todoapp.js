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


const [addTodo,deleteAllTodos] = document.querySelectorAll('button')

const FirstForm = document.querySelector('.card-body > #todo-form')

console.log(FirstForm)