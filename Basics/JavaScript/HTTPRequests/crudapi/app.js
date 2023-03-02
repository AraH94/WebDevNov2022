// Add Comment Application

const InputUsername = document.getElementById('username');
const TextAreaComment = document.getElementById('comment');
const CommentsList = document.getElementById("commentsList");
const Data_ID = document.getElementById('data_id');

function AddComment() {
	const obj = {
		username: InputUsername.value, // .value is what you type in the input
		comment: TextAreaComment.value
	}
	fetch('http://localhost:3000/database', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json' //
		},
		body: JSON.stringify(obj)
	})
		.then(response => response.json())
		.then(data => {
			console.log(data, 'Saved');
		})
}

// Retrieves all comments (GET request)
fetch('http://localhost:3000/database')
	.then(response => response.json())
	.then(allcomments => {

		allcomments.map(single_comment => {
			// loop the array!
			console.log(single_comment); // single object from the array

			CommentsList.innerHTML += `<li class="list-group-item">${single_comment.username} - ${single_comment.comment}</li>`
		})
	})

//test > change html content of ul list
// CommentsList.innerHTML = "Javascript"
// <li class="list-group-item">Item</li>

function deleteOne() {
	const ID = Data_ID.value
	fetch(`http://localhost:3000/database/${ID}`, {
		method: 'DELETE'
	})
		.then(() => {
			console.log('Data is deleted')
		})
}

function updateOne() {
	const ID = Data_ID.value;
	const NewComment = {
		username: "root",
		comment: "This is a new comment!"
	}
	fetch(`http://localhost:3000/database/${ID}`, {
		method: 'PATCH',
		headers: { // the data which contains what kind of data your are sending or from what origin you are sending this data
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(NewComment)
	})
		.then(res => res.json()) // will retrive the response of our request (succes, fail, 404, 401,...)
		.then(updated => console.log('updated', updated)); // will store the fetch if request is successfull otherwise it will execute: .then(res => res.json()) 
}

function deleteAll() {
	fetch('http://localhost:3000/database')
		.then(res => res.json())
		.then(data => {
			// loop the array here 
			data.forEach(comment => {// forEach, because the data we retrive here is an array list
				console.log(`Delete ${comment.id}`);
				// send delete request here for each object's id
				// comment is an object in the loop
				// id prop of comment > comment.id
				fetch(`http://localhost:3000/database/${comment.id}`, {
					method: 'DELETE'
				})
					.then(() => {
						console.log('Done!');
					})
			})
		})
}