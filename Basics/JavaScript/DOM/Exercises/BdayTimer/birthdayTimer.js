let countDownDate = new Date("May 8, 2023 00:00:00").getTime();

function Timer(){
	let now = new Date().getTime();
	let timeLeft = countDownDate - now;

	// Calculating the days, hours, minutes and seconds left
	let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	// Result is output to the specific element
	document.getElementById("days").innerHTML = days + "d "
	document.getElementById("hours").innerHTML = hours + "h "
	document.getElementById("minutes").innerHTML = minutes + "m "
	document.getElementById("seconds").innerHTML = seconds + "s"

	// Display the message when countdown is over
	if(timeLeft < 0) {
		document.getElementById("days").innerHTML = ""
		document.getElementById("hours").innerHTML = ""
		document.getElementById("minutes").innerHTML = ""
		document.getElementById("seconds").innerHTML = ""
		document.getElementById("content").innerHTML = "<img src='https://thriftyniftymommy.com/wp-content/uploads/2019/11/Happy-Birthday-Meme-6.jpg'/>";
	}
}

setInterval(function () {
	Timer()
}, 1000);