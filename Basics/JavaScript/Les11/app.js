// document.getElementById()

// select/find h1 elements
const dice1text = document.getElementById('dice1');
const dice2text = document.getElementById('dice2');
const output = document.getElementById('result');
const WinnerGif = document.getElementById('winner');
let count = 0;

// Generate random number and update the content
function DiceRoll() {
	const dice1Random = Math.round(Math.random() * 5 + 1); // 1-6
	const dice2Random = Math.round(Math.random() * 5 + 1);
	dice1text.innerText = `Dice 1: ${dice1Random}`;
	dice2text.innerText = `Dice 2: ${dice2Random}`;
	if (dice1Random === dice2Random) {
		count++;
		output.innerText = "You Win! " + count + " Times";
		WinnerGif.src = "https://i.pinimg.com/originals/41/5f/42/415f42489da3bca11c4bf636b28eb38a.gif"; // update src attribute value of img tag
		winSound.play();
	} else {
		WinnerGif.src = ""
	}
}

function ClickHandler() {
	DiceRoll()
}

// Pressing button ClickHandler() > DiceRoll()

