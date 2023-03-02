function deleteAllPosts() {
	// console.log('Test delete');
	fetch('http://localhost:3000/database/')
		.then(res => res.json())
		.then(data => {
			data.forEach(comment => {
				console.log(`Delete ${comment.id}`)
				fetch(`http://localhost:3000/database/${comment.id}`, {
					method: 'DELETE'
				})
					.then(() => {
						console.log('All posts are deleted');
					})
			})
		})
}