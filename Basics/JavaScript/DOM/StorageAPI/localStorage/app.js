// localStorage and methods
const [_get, save, del, update] = document.querySelectorAll('button');
const output = document.querySelector('.output');
const [username, keyInput] = document.querySelectorAll('input');

// setItem method -> create data in localstorage
localStorage.setItem('drink', 'coffee');

save.addEventListener('click', (e) => {
	// console.log('Hello');
	// console.log(username.value,keyInput.value);
	// localStorage.setItem(keyInput.value, username.value)

	let obj = {
		"username": username.value
	}
	console.log(typeof JSON.stringify(obj))
	localStorage.setItem(keyInput.value, JSON.stringify(obj))
});

// getItem
_get.addEventListener('click', (e) => {
	// let Drink = localStorage.getItem('drink');
	let StorageData = localStorage.getItem(keyInput.value);
	console.log(StorageData);
	if (StorageData === null) {
		alert('Not found');
	}
	output.innerText = StorageData
});

// delete storage data
// localStorage.removeItem('drink')

del.addEventListener('click', (e) => {
	const keyName = keyInput.value;
	console.log(keyName);
	// localStorage.removeItem(keyName) // remove storage data
	localStorage.clear() // clear all storage datas
})

// .key()
// console.log(localStorage.key(1));

// size of localstorage
// console.log(localStorage.length);
for (let x = 0; x < localStorage.length; x++) {
	console.log(x);
	let keyName = localStorage.key(x);
	// console.log(keyName);
	let value = localStorage.getItem(keyName);
	console.log(`key:${keyName}\nvalue:${value}`);
}

// for (let key in localStorage){
// console.log(key)

// update storage data
update.addEventListener('click', () => {
	// old data
	// new data
	const keyName = keyInput.value;
	const newData = username.value;
	// localStorage.setItem(keyName, newData);
	const oldData = localStorage.getItem(keyName);
	console.log(oldData);

	const userObj = JSON.parse(oldData); // temporary
	console.log(userObj.username);
	userObj.username = newData; // new value updated
	console.log(userObj); // newe data displayed

	// set storage key name with new object
	localStorage.setItem(keyName, JSON.stringify(userObj))
	console.log(JSON.parse(oldData));
});

/*
Step 1: get object data
Step 2: convert string object data to real object (json.parse())

Step 3: update object with new value
Step 4: convert update object to string again (json.stringify())
Step 5: overwrite the data now
*/