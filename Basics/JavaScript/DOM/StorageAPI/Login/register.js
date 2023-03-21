const [username, password] = document.querySelectorAll('input');

const RegisterBtn = document.querySelectorAll('a')[1];
const EyeIcon = document.querySelector('.fa-eye')

// event
RegisterBtn.addEventListener('click', () => {
	// create user object here
	const NewUser = {
		"username": username.value,
		"password": password.value
	}
	console.log(NewUser);
	if (username.value !== '' && password.value !== '') {
		const ConvertObjToString = JSON.stringify(NewUser);
		console.log(ConvertObjToString);
		sessionStorage.setItem('user', ConvertObjToString);
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