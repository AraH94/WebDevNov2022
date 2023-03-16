// Step 1: Define 2 functions, 1 for the animation and 1 for the button click to start the animation

// Step 2: Link the function to the button

// Step 3: Create 2 global variables to find '.box1' and 'body' elements

// Step 4: Create 2 local variables inside the Animation function to store new random colors

// Step 5: Apply the random colors to the box and the body

// Step 6: Create a setInterval inside the Start function to call the Animation function every 300ms

// Stap 1: Definieer 2 functies, 1 voor de animatie en 1 voor de knopklik om de animatie te starten

// Stap 2: Koppel de functie aan de knop

// Stap 3: Maak 2 globale variabelen om '.box1' en 'body' elementen te vinden

// Stap 4: Maak 2 lokale variabelen in de Animatie-functie om nieuwe willekeurige kleuren op te slaan

// Stap 5: Pas de willekeurige kleuren toe op de box en het lichaam

// Stap 6: Maak een setInterval in de Start-functie om de Animation-functie elke 300 ms aan te roepen

const bootstrapColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const Box1 = document.querySelector('.box1');
const BodyEl = document.body;

function Animation() {
	let random1 = `bg-${bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)]}`;
	let random2 = `bg-${bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)]}`;
	// bg-success, bg-danger
	console.log(`Body:${random1}\nBox1:${random2}`);

	// create loop and find current bootstrap color and remove it
	bootstrapColors.forEach(color =>{
		console.log(`bg-${color}`);
		let doesColorExist = BodyEl.classList.contains(`bg-${color}`); // true or false?
		if (doesColorExist){
			BodyEl.classList.remove(`bg-${color}`)
		}
	})

	// set new bootstrap background color
	BodyEl.classList.add(random1)

	// Box1 color
	// create loop and find current bootstrap color and remove it
	bootstrapColors.forEach(color =>{
		console.log(`bg-${color}`);
		let doesColorExist = Box1.classList.contains(`bg-${color}`); // true or false?
		if (doesColorExist){
			Box1.classList.remove(`bg-${color}`)
		}
	})

	// set new bootstrap background color
	Box1.classList.add(random2)
}

// null currently
let StartAnimation = null;

function Start() {
	StartAnimation = setInterval(Animation, 300)
	// console.log((Box1, BodyEl));
}

function Stop(){
	// stop the interval loop
	clearInterval(StartAnimation);
	window.location.reload();
}


// const startButtton = document.querySelector('.btn');

// let box1 = document.querySelector('.box1');
// let body = document.querySelector('body');

// function Animation() {
// 	let color1 = bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)];
// 	let color2 = bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)];

// 	box1.style.backgroundColor = color1;
// 	body.style.backgroundColor = color2;
// }

// function Start() {
// 	console.log('Hello');
// 	setInterval(Animation, 300);
// }

// startButtton.addEventListener('.btn', Start);