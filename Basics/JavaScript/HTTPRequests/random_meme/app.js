// https://developers.giphy.com/explorer/

// iframe tagname
const RandomSource = document.getElementById('random_meme')

function GetRandomMeme() {
	console.log('Friends 1994');
	fetch('https://api.giphy.com/v1/gifs/random?api_key=laPsXl26Q05Zo98huW8KMv0jwfBpBgWc&tag=Friends&rating=g')
		.then(res => res.json())
		.then(meme => {
			console.log(meme.data.embed_url);
			// meme.data.emebed_url is a new meme
			console.log(RandomSource);
			// RandomSource.src
			RandomSource.src = meme.data.embed_url
		})
}