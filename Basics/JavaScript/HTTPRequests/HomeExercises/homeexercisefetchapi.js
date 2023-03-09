// function deleteAllPosts() {
// console.log('Test delete');
// 	fetch('http://localhost:3000/database/')
// 		.then(res => res.json())
// 		.then(data => {
// 			data.forEach(comment => {
// 				console.log(`Delete ${comment.id}`)
// 				fetch(`http://localhost:3000/database/${comment.id}`, {
// 					method: 'DELETE'
// 				})
// 					.then(() => {
// 						console.log('All posts are deleted');
// 					})
// 			})
// 		})
// }

let url = 'http://localhost:3000/database/';

function deleteAllPosts() {
	console.log('Deleting all posts...');
	//delete one by one
	fetch(url)
		.then(response => response.json())
		.then(data => {
			data.forEach(post => {
				console.log(post, 'post deleted');
				fetch(url + '/' + post.id, {
					method: 'DELETE'
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			})
		})
}