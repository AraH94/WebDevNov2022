const [username, password] = document.querySelectorAll('input');

const RegisterBtn = document.querySelectorAll('a')[1];
const EyeIcon = document.querySelector('.fa-eye');

const GetSessionStorageUsers = () => JSON.parse(sessionStorage.getItem('user'));

// event
RegisterBtn.addEventListener('click', () => {
	// create user object here
	const NewUser = {
		"username": username.value,
		"password": password.value
	}
	// console.log(NewUser);

	let tempUsers = GetSessionStorageUsers(); // return an arraylist
	// tempusers = [{}, {}, {}];
	// console.log(tempUsers);
	// tempUsers.push({title: 'laptop'});
	// console.log(tempUsers);

	if (username.value !== '' && password.value !== '') {
		// const ConvertObjToString = JSON.stringify(NewUser);
		tempUsers.push(NewUser); // insert new user data
		// console.log(ConvertObjToString);
		// sessionStorage.setItem('user', ConvertObjToString);
		console.log(tempUsers);
		sessionStorage.setItem('user', JSON.stringify(tempUsers))
	}
});

EyeIcon.addEventListener('click', (e) => {
	console.log(e.target);
	let typeOfPasswordInput = password.getAttribute('type') == 'password' ? 'text' : 'password';
	console.log(typeOfPasswordInput);
	password.setAttribute('type', typeOfPasswordInput)

	if (typeOfPasswordInput == 'text') {
		EyeIcon.classList.remove('fa-eye')
		EyeIcon.classList.add('fa-eye-slash')
	} else {
		EyeIcon.classList.remove('fa-eye-slash')
		EyeIcon.classList.add('fa-eye')
	}
	// closed eye: fa-solid fa-eye
	// default: fa-solid fa-eye-slash
})

document.addEventListener('DOMContentLoaded', () => {
	let users = GetSessionStorageUsers();
	console.log(users); // null when sessionStorageData is empty
	if (users === null) {
		sessionStorage.setItem('user', '[]');
	}
});