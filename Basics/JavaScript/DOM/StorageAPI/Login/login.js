const [username, password] = document.querySelectorAll('input');

const [login] = document.querySelectorAll('a');

const Loading = document.querySelector('.loading');

login.addEventListener('click', (e) => {
	// payload need to save in database or send to server
	// user data from form
	const userObj = {
		username: username.value,
		password: password.value
	}
	console.log(userObj);

	// user data from db
	const userDB = JSON.parse(sessionStorage.getItem('user')) // getItem is to see the value

	// username.value
	// userDB.find() > username
	let isUserFound = userDB.find(user => user.username === userObj.username && user.password === userObj.password);
	console.log(isUserFound);
	Loading.innerText = "Logging in ... please wait!";

	setTimeout(() => { // we're using setTimeout to make the website more realistic
		if (isUserFound) {
			alert('Welcome user! You are logged in!')
			Loading.innerText = "You are logged in!"; // shows that you're logged in
			Loading.classList.remove('text-light');
			Loading.classList.add('text-success');

			setTimeout(() => { // changes the color green back to the basic color of the page
				Loading.classList.remove('text-danger');
				Loading.classList.add('text-light');
			}, 3000);

		} else {
			alert('User not found! Username/Password is incorrect')
			Loading.innerText = "User is not logged in!"
			// window.location.href = 'http://127.0.0.1:5500/HTML-CSS/Basics/JavaScript/DOM/StorageAPI/Login/register.html' // wrong username and/or password, it will go to the register form. This is optional
			setTimeout(() => {
				window.location.href = 'http://127.0.0.1:5500/HTML-CSS/Basics/JavaScript/DOM/StorageAPI/Login/register.html'
			}, 3000)
		}
	}, 3000);

	// console.log(userDB);
	e.preventDefault(); // changes the default settings of the click event
})

// {"username":"root","password":"root123"}