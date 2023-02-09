// Calculator
// const calc = {
// 	add: function (a, b) {
// 		return a + b;
// 	},
// 	substract: function (a, b) {
// 		return a - b;
// 	},
// 	multiply: function (a, b) {
// 		return a * b;
// 	},
// 	divide: function (a, b) {
// 		return a / b;
// 	}
// }
// console.log(calc.divide(12, 124));

const Drone = {
	runEngine: () => console.log('Drone engine has been started...!'),
	fly: () => console.log('Drone is flying...'),
	flyTo: coordinate => console.log(`Drone is flying to ${coordinate}`),
	takePhoto: () => console.log('Photo captured'),
	returnBase: () => console.log('Drone is going back to the base!')
}

function Joystick(keypress, location) {
	switch (keypress) {
		case 'run':
			Drone.runEngine();
			break;
		case 'fly':
			Drone.fly();
			break;
		case 'flyto':
			Drone.flyTo(location)
			break;
		case 'photo':
			Drone.takePhoto()
			break;
		case 'return':
			Drone.returnBase();
			break;
		default:
			console.log('Incorrect keypress')
	}
}

Joystick('run')
Joystick('flyto', '2323232,232323232')
Joystick('photo')
Joystick('return')