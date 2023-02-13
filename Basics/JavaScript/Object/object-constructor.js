// function Student(username, password, email) {
// 	this.user = username // handle username value at global scope
// 	this.pass = password;
// 	this.email = email;
// } // JS object constructor

// const user1 = new Student('root', 'root123', 'root@root.com')

// console.log(user1);

function PrintMyName(name) {
	return name;
}

const user1 = new PrintMyName('Ara');

user1.username = "coffee";

console.log(typeof user1, user1.username);

function Application(device_id, serialnumber) {
	this.deviceId = device_id;
	this.serial_number = serialnumber;

	this.display = function () {
		console.log(`Device ID: ${this.deviceId}`);
	}
}

let device1 = new Application(001, "BE8484848484")

console.log(device1); // need to put this. so it will show 
device1.display();