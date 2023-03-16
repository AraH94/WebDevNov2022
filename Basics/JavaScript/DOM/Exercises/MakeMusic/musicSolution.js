// Teacher version
// Exercise
// 1. Use querySelectorAll to select all the keys elements
// 2. Use querySelectorAll to select all the audio elements
// 3. Create keydown event listener on document to log the key value of the key that was pressed. (e.key) and add a class of playing to the key element that was pressed
// 4. Create a function that takes a key value as an argument (data-key="75")
// 5. Loop through the audio elements and play the audio element that has the same data-key as the key value passed to the function
// 6. Create switch statement that calls the function with the correct key value for each key
// 7. Test it out!

function playAudio(key) {
	// const audio = document.querySelector(`audio[data-key="${key}"]`);
	var audioElem = document.querySelector(`audio[data-key="${key}"]`)
	audioElem.currentTime = 0;
	audioElem.play();
}

document.addEventListener('keydown', (e) => {
	console.log(e.key);
	console.log(e.keyCode);
	playAudio(e.keyCode);

	// Add class
	// const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	// console.log(keyElement);
	// if (keyElement) {
	// 	keyElement.classList.add('playing')

		// Remove after 2 seconds
	// 	setTimeout(() => {
	// 		keyElement.classList.remove('playing')
	// 	}, 200)

		// switch (e.keyCode) {
		// 	case (65):
		// 		audio = new Audio("sounds/clap.wav")
		// 		audio.play();
		// 		break;
		// 	case (83):
		// 		audio = new Audio("sounds/hihat.wav")
		// 		audio.play();
		// 		break;
		// 	case (68):
		// 		audio = new Audio("sounds/kick.wav")
		// 		audio.play();
		// 		break;
		// 	case (70):
		// 		audio = new Audio("sounds/openhat.wav")
		// 		audio.play();
		// 		break;
		// 	case (71):
		// 		audio = new Audio("sounds/boom.wav")
		// 		audio.play();
		// 		break;
		// 	case (72):
		// 		audio = new Audio("sounds/ride.wav")
		// 		audio.play();
		// 		break;
		// 	case (74):
		// 		audio = new Audio("sounds/snare.wav")
		// 		audio.play();
		// 		break;
		// 	case (75):
		// 		audio = new Audio("sounds/tom.wav")
		// 		audio.play();
		// 		break;
		// 	case (76):
		// 		audio = new Audio("sounds/tink.wav")
		// 		audio.play();
		// 		break;
		// }
	// }
})