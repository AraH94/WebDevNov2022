// Add Comment Application

const InputUsername = document.getElementById('username');
const TextAreaComment = document.getElementById('comment');
const CommentsList = document.getElementById("commentsList");

function AddComment() {
	const obj = {
		username: InputUsername.value, // .value is what type in the input
		comment: TextAreaComment.value
	}
	fetch('http://localhost:3000/database', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
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
