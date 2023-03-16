// Find li elements 
// const liItems = document.querySelectorAll('li.list-group-item:nth-child(even)') // object
// const ListContainer = document.querySelector('.list-group'); // querySelector returns an object, kind of array list
// const TeaElement = document.querySelector('.tea');

// liItems.forEach((li,index)=>{
//     console.log(li) // > each li element
// className
//     console.log(li.className)
//     li.className="list-group-item bg-dark text-light"
//     li.innerHTML =`<h1>Item-${index}</h1>` // update content of element or elements
// li.innerText = `<h1>hello </h1>` // NO HTML TAGs
// li.innerText > only string <p>hello</p>
// })

// classList
// liItems.forEach((li, index) => {
// 	console.log(li);
// 	li.classList.add('bg-dark');
// 	li.classList.add('text-light');
// 	console.log(li.classList.contains('list-group-item'));
// li.classList.remove('coffee')
// 	if (li.classList.contains('coffee')) {
// 		li.classList.remove('coffee')
// 	}
// })

// add new Child into ul list
// "<li>Hello World</li>" DOMString
// const liElement = document.createElement('li');
// setAttribute
// liElement.setAttribute('class', 'list-group-item');
// liElement.classList.add('bg-danger');
// liElement.classList.add('text-light')
// liElement.innerText = "This is a new li element";

// console.log(liElement, "This is a new li");
// ListContainer.appendChild(liElement);

// const g = t => document.createElement(t) // reusable function to create html elements

// const newTask = g('li');
// newTask.classList.add('list-group-item');
// newTask.classList.add('bg-primary');
// newTask.classList.add('text-light');
// newTask.innerText = "This is another li";
// ListContainer.appendChild(newTask);

// previousSibling
// TeaElement.previousElementSibling.innerText = "This is the sibling of Tea element";
// TeaElement.previousElementSibling.previousElementSibling.innerText = "This is the first sibling of Tea element";
// console.log(TeaElement.previousElementSibling);

// nextSiblingsofelement
// TeaElement.nextElementSibling.innerText = "Next sibling of tea element";


// Other exercise example 
/*
<ul class="list-group list-group-flush">
			<li class="list-group-item newClassName">Item</li>
			<li class="list-group-item coffee">Item</li>
			<li class="list-group-item tea">Item</li>
			<li class="list-group-item">Item</li>
			<li class="list-group-item">Item</li>
		</ul>
*/

const ParentContainer = document.querySelector('.container')
const g = t => document.createElement(t)

const ULContainer = g('ul')
ULContainer.className = "list-group list-group-flush" // sets className for <ul> element

function LiItemGenerator(content,bgColor,textColor) {
    const LiItem = g('li'); // created <li> tag
    LiItem.className = `list-group-item ${bgColor} ${textColor}` // sets className for <li> 
    LiItem.innerText = content
    return LiItem
}

// const LiItem = g('li'); // created <li> tag
// LiItem.className = "list-group-item" // sets className for <li> 
// LiItem.innerText = "This is an example li "

// const Item1 = LiItemGenerator('Item-1 test')
// const Item2 = LiItemGenerator('Item-2 example example')
// const Item3 = LiItemGenerator('Item-3 example example')
// const Item4 = LiItemGenerator('Item-4 example example')
// const Item5 = LiItemGenerator('Item-5 example example')
// ULContainer.appendChild(Item1) // li inserted into UL
// ULContainer.appendChild(Item2)
// ULContainer.appendChild(Item3)
// ULContainer.appendChild(Item4)
// ULContainer.appendChild(Item5)

for(let i=1;i<=10;i++){
    
    if(i%2===0){
        const item = LiItemGenerator(`Item-${i} example`,'bg-dark','text-light')
        ULContainer.appendChild(item)
    }else{
        const item = LiItemGenerator(`Item-${i} example`)
        ULContainer.appendChild(item)
    }
    
}

ParentContainer.appendChild(ULContainer)
