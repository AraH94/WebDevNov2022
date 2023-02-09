// Blog CMS crud

// 1. Create an array
const users = [{ id: 1, username: 'root', password: 'root123' }, { id: 2, username: 'admin', password: 'admin123' },]
const posts = []

// 2. Create a function that can add new user if user username does not exist
// 3. Create a function that can login user if user username and password does exist and is correct
// 4. Create a function that can create new post if user is logged in
// 5. Create a function that can delete post if user is logged in
// 6. Create a function that can fetch all posts

const AddNewUser = user => {
	let userindex = 0;
	let found = users.map(single_user => single_user.username === user.username)
	if (found.includes(true)) {
		console.log("User is already taken");
	} else {
		console.log("Create an new user");
		// insert your new account here
		userindex = users[users.length - 1].id // get last object from array prop id // 2-3-4
		userindex++ // increase from 2 to 3
		user.id = userindex // create id property and store new id
		users.push(user) // insert new user into users list
	}
}

// Question 3
const UserAuth = user => {
	// {username: 'root', 'password' : 'abc123'}
	let isLoggedIn = users.filter(single => single.username === user.username && single.password === user.password);
	return isLoggedIn.length !== 0 ? true : false
}

AddNewUser({
	username: 'ara',
	password: 'ara123'
})

AddNewUser({
	username: 'imke',
	password: 'imke123'
})

// Question 3
console.log(UserAuth({
	username: 'michelle',
	password: 'michelle123'
}))

const CreatePost = post => {
	let isLoggedIn = UserAuth({
		username: 'ara',
		password: 'ara123'
	}) // verify that user is logged in
	if (isLoggedIn) {
		posts.push(post)
	} else {
		// user is not logged in
		console.log('User is not logged in, please login with your account');
	}
}

// Question 4
CreatePost({ title: 'Lorem ipsum', body: 'This is the new post data' })

// Question 5
const DeleteUser = user => {
	let findUser = posts.findIndex(function (user) {
		return user.user === user
	})
	if (findUser !== -1) {
		posts.splice(findUser, 1)
	} else {
		console.log(`User ${user} not found`);
	}
	console.log(findUser);
}
DeleteUser(1)
console.log(users);
console.log(posts);




