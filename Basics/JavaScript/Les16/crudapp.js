// CRUD Application
// create data in database
// delete data in database
// update data in database

/*
fullname, username, email, password
*/

let users = [];

const AddNewUser = newUser => {
	let id = 0;

	if (users.length === 0) {
		id++
		console.log(id)
		newUser.id = id
		users.push(newUser)
		// console.log(newUser)
	} else {
		id = users[users.length - 1].id
		console.log("Position Index Number", users.length - 1)
		id++
		newUser.id = id
		// console.log({
		//     id:id,
		//     user:'admin'
		// }) // insert
		users.push(newUser)
	}
	// insert new user object
}

AddNewUser({
	fullname: 'John Doe',
	username: 'john',
	email: 'john@john.com',
	password: 'john123'
})

AddNewUser({
	fullname: 'Mike Doe',
	username: 'Mike',
	email: 'mike@mike.com',
	password: 'mike123'
})

const DeleteUser = id => {
	let findUser = users.findIndex(function (user) {
		return user.id === id
	})
	if (findUser !== -1) {// conditie is er wel
		users.splice(findUser, 1) // als je hier 2 zet, dan zal die vanaf de 2 positie er 2 weghalen
	} else {
		console.log(`User ${id} not found`);
	}
	console.log(findUser);
}
DeleteUser(1)

const UpdateUser = (id, propname, newvalue) => {
	const UserIndex = users.findIndex(user => user.id === id) // find position number of user
	// console.log(users[UserIndex]);
	// console.log(users[UserIndex][propname])

	if (UserIndex !== -1) {
		users[UserIndex][propname] = newvalue
	} else {
		console.log('Data not found');
	}
}

UpdateUser(2, 'email', 'random@random.com') // Als ik 1 zet, dan geeft die foutmelding, omdat je bij delete de 1ste date hebt verwijdert, dus hier rekening mee houden
UpdateUser(1, 'password', 'asd123')
console.log(users);

