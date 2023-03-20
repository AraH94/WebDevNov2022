// Exercise
// 1. Use querySelectorAll to select all the keys elements
// 2. Use querySelectorAll to select all the audio elements
// 3. Create keydown event listener on document to log the key value of the key that was pressed. (e.key) and add a class of playing to the key element that was pressed
// 4. Create a function that takes a key value as an argument (data-key="75")
// 5. Loop through the audio elements and play the audio element that has the same data-key as the key value passed to the function
// 6. Create switch statement that calls the function with the correct key value for each key
// 7. Test it out!

const KeyElements = document.querySelectorAll('.key');
const AudioElements = document.querySelectorAll('audio');

KeyElements.forEach(() => {
	
})

document.addEventListener('keydown', (e) => {
	//	console.log('This is keydown event', e.key);
	playSound(e.key)
	console.log(e.keyCode);

	// Add class
	const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	console.log(keyElement);
	if (keyElement) {
		keyElement.classList.add('playing')

		// Remove after 2 seconds
		setTimeout(() => {
			keyElement.classList.remove('playing')
		}, 200)
	}
})

function playSound(sound) {
	let audio;
	switch (sound) {
		case "A":
			console.log('You pressed A');
			audio = new Audio('sounds/clap.wav')
			audio.play();
			break;
		case "S":
			console.log('You pressed S');
			audio = new Audio('sounds/hihat.wav')
			audio.play();
			break;
		case "D":
			console.log('You pressed D');
			audio = new Audio('sounds/kick.wav')
			audio.play();
			break;
		case "F":
			console.log('You pressed F');
			audio = new Audio('sounds/openhat.wav')
			audio.play();
			break;
		case "G":
			console.log('You pressed G');
			audio = new Audio('sounds/boom.wav')
			audio.play();
			break;
		case "H":
			console.log('You pressed H');
			audio = new Audio('sounds/ride.wav')
			audio.play();
			break;
		case "J":
			console.log('You pressed J');
			audio = new Audio('sounds/snare.wav')
			audio.play();
			break;
		case "K":
			console.log('You pressed K');
			audio = new Audio('sounds/tom.wav')
			audio.play();
			break;
		case "L":
			console.log('You pressed L');
			audio = new Audio('sounds/tink.wav')
			audio.play();
			break;
		default:
			console.log('Press the right sound');
	}
}