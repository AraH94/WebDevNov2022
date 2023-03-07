// DOM manipulations basics
// change-remove-add
var result;

// document
result = document;
result = document.all; // returns object collection
result = document['all'];
result = document.body.children[0];
result.innerText="Hello Javascript"; // insert text into p1 html element
result = document.head.children;
result = document.location; // information about current url
result = document.characterSet // return charset type
result = document.scripts;
result = document.forms;

// document.forms.forEach(form=>{
//     console.log(form)
// })
// document.forms.map(form=>{
//     console.log(form)
// })
// for(let i=0;i<document.forms.length;i++){
//     console.log(document.forms[i])
// }

// for(let x of document.forms){
//     console.log(x)
// }

// DOM Methods
/*
getElementById(idValue) // single element
getElementsByTagName('p') // html collection
getElementsByClassName('btn-danger'); // htmlCollection
querySelector('cssSelector'); // single element
querySelectorAll('cssSelector'); // one or many element arraylist
*/

// getElementById
result = document.getElementById('form1');

// getElementsByTagName
result = document.getElementsByTagName('p');

// for(let p of result){
//     console.log(p)
//     p.innerText="Linux" // updated all p's content
// }

// getElementsByClassName 
result = document.getElementsByClassName('first');
// for(let p of result){
//     console.log(p)
//     p.innerText="Linux" // updated specific p's content
// }

// querySelector -> one single element. 
result = document.querySelector('.first');
result = document.querySelector('#form1');
result = document.querySelector('form');

// querySelectorAll -> one or more elements
result = document.querySelectorAll('.first');
result.forEach(element=>console.log(element));

console.log(result);