let PromiseMe = username => {
	return new Promise((resolve, reject) => {
		// resolve(username)
		if (username.includes(0)) {
			reject('Number can not be included in username')
		} else {
			resolve(username)
		}
	})
}

PromiseMe('Admin0')
	.then(data => {
		console.log(data);
	})
	.catch(e => console.log(e));