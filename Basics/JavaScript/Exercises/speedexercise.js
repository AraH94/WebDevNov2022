// Own try
function SpeedCalculator(distance, time) {
	let speed = distance / time;
	console.log(`The speed is ${speed} km/h`)
}
SpeedCalculator(80, 2)

// Answer class 
function SpeedCalculator(distance, time) {
	return distance / time
}
let speedOfAuto = SpeedCalculator(100, 2);
console.log(`The speed is ${speedOfAuto} km/h`);