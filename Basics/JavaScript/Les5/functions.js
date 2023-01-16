const output = document.getElementById('output')
// simple function
// function Add(){
// 	return 'Test value'
// }

// function AddMessage(){
// 	console.log('This is test value')
// }

// callback
// console.log(Add()) //
// const result = Add()
// console.log(result)
// AddMessage()

// output.innerHTML="<h1>Hello</h1>"
// output.innerHTML=Add()

// function AddMessageInToDocument(message, message2) {
// 	output.innerHTML += `<h1>${message}</h1>` //backtick ` ´ - template literals
// 	output.innerHTML += `<h1>${message2}</h1>` // APPEND

// }

// AddMessageInToDocument('TWITTER', 'INSTAGRAM')

// let myname = "micro"
// myname+="soft" // my name = myname + soft
// console.log(myname)


// Object in funtion
// function CreateAccount(username, password, email, role) {
// 	const obj = {
// 		user: username,
// 		pass: password,
// 		email: email,
// 		App_Role: role

// 	}
// 	return obj
// }

// console.log(CreateAccount('root', 'asd123', 'root@microsoft.com', 'sudo')); // example output1
// const user1 = CreateAccount('root', 'asd123', 'root@microsoft.com', 'sudo')
// console.log(user1) // example output2

// let users = []
// function CreateAccount(username, password, email, role) {
// 	const obj = {
// 		user: username,
// 		pass: password,
// 		email: email,
// 		App_Role: role
// 	}
// 	return users.push(obj)
// }

// CreateAccount('root', 'asd123', 'root@microsoft.com', 'sudo')
// CreateAccount('admin', 'asd123', 'root@microsoft.com', 'sudo')
// CreateAccount('Mohammed', 'asd123', 'root@microsoft.com', 'sudo')

// console.log(users)


// let users = []

// function SendAndSaveObj(obj) {
// This function save userdata in database
// 	users.push(obj)
// 	console.log(users)
// }

// function MakeAccount(obj) {
// This will take user object data
// 	return SendAndSaveObj(obj)
// }

// const user1={
// 	user:'root'
// } 
// OR

// MakeAccount({
// 	user: 'root'
// })

// MakeAccount(user1)
// MakeAccount({
// 	user:'admin'
// })


//Assignment - contacts app

// 1. Create a function that takes 3 arguments (name, phone, email)
// 2. Create an object with 3 keys (name, phone, email)
// 3. Send the object to the database (array)
// 4. Display the contacts

let users = []
function CreateAccount(username, phone, email) {
	const obj = {
		user: username,
		phone: phone,
		email: email
	}
	return users.push(obj)
}

CreateAccount('Ara', '123456789', 'arahoedemakers@hotmail.com')
CreateAccount('Nina', '123456789', 'arahoedemakers@hotmail.com')

console.log(users)