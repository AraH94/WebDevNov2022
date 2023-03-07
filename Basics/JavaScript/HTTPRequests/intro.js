// POST = create data
// GET = retrive data

/*
Fake backend in local computer
COMMAN > json-server data.json --watch
--watch -> hot reload
API => Application Interface
*/

// HTTP - GET request
fetch('http://localhost:3000/database')
	.then(res => res.json())
	// .json() > method that can convert data into json (javascript object notation) data type
	.then(jsondata => {
		console.log(jsondata);
	})

// read a text file
fetch('readme.txt')
	.then(response => response.text())
	.then(txtcontent => {
		console.log(txtcontent);
	})

// fetch('data.json')
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data);
// 	})

// GET request for single object
// /database/3
fetch('http://localhost:3000/database/1') // returns as a single object
	.then(res => res.json())
	.then(data => {
		console.log(data, 'url param');
	})

// url para dns.com/blog/34
// url query dns.com/blog?title

// fetch('http://localhost:3000/database/?title=Javascript') // returns in an array
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data, 'url query');
// 	})

// Use fetch in async function

async function GetData(id) {
	let response = await fetch('http://localhost:3000/database/' + id)
	let data = response.json();
	return data
}

const DataID = document.getElementById('data_id');
const Output = document.getElementById('output');

function ClickHandler() {
	// Output.innerHTML = "Hello World" // Changes text in list when you click on button
	GetData(DataID.value)
		.then(mydata => {
			Output.innerHTML += `<li>Title:${mydata.title}<br/>Body:${mydata.body}</li>`  // += -> keeps the first data in the list and if you use = -> it will delete the first data in the list
		})
}

const newData = {
	title: 'Python',
	body: "Python is an easy language"
}

function AddDataHandler() {
	fetch('http://localhost:3000/database', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify(newData)
	})
		.then(data => {
			console.log(data, 'Saved');
		})
}

function DeleteHandler() {
	console.log('Testing delete');
	// DELETE Request
	fetch('http://localhost:3000/database/' + DataID.value, {
		method: 'DELETE'
	})
		.then(() => {
			console.log('Deleted');
		})

	// This code will show you for a few seconds that the id id deleted
	// setTimeout(()=>{
	// 	fetch('http://localhost:3000/database/' + DataID.value, {
	// 	method: 'DELETE'
	// })
	// 	.then(() => {
	// 		console.log('Deleted');
	// 	})
	// },2000)
}

const newObjectData = {
	title: 'GoLang',
	body: 'Cool language ever'
}

// UPDATE REQUEST
function UpdateHandler() {
	fetch('http://localhost:3000/database/6', {
		method: 'PATCH',
		headers: { // sets content type which data you are sending to the machine
			'Content-Type': 'application/json; charset=utf-8'
		},
		// new json data will be stored in body prop's value as string data type
		body: JSON.stringify(newObjectData) // always as string
	})
		.then(res => res.json())
		.then(data => {
			console.log(data, 'UPDATED');
		})
}