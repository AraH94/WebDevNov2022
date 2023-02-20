// Create a class MusicPlayer that has the following properties: playlist<arraylist>, volume as default 0, isPlaying as default false, currentTrack as default 0

// Create the following methods:
// play() - sets isPlaying to true
// pause() - sets isPlaying to false
// next() - sets currentTrack to the next track
// previous() - sets currentTrack to the previous track
// setVolume(volume) - sets the volume to the given value
// status() - displays the current track, volume and isPlaying in the console

// Create a new instance of MusicPlayer and test the methods
// Expected output:
// Current track: song1, volume: 0, is playing: true
// Current track: song2, volume: 0, is playing: true
// Current track: song2, volume: 10, is playing: false
// const musicPlayer = new MusicPlayer(['song1','song2'], 50);

class MusicPlayer {
	constructor(playlist, volume) {
		this.playlist = playlist;
		this.volume = volume;
		this.isPlaying = false; // false as default
		this.currentTrack = 0; // index position number in playlist
	}

	play() {
		return this.isPlaying = true; // player is playing a music now
	}

	pause() {
		return this.isPlaying = false;
	}

	next() {
		// return this.currentTrack += 1; // or this.currentTrack++
		// this.currentTrack was 0
		// ++ from 0 to 1
		// 1 >>> 2
		// console.log(this.currentTrack);
		// console.log('---------------');
		// console.log(this.playlist.length);
		if (this.currentTrack >= this.playlist.length - 1) {
			console.log('This is the last song on your playlist');
		} else {
			this.currentTrack++;
		}
	}

	previous() {
		// return this.currentTrack -= 1; // or this.currentTrack--
		if (this.currentTrack > 0) {
			// 1, 2, 3, 4, 5
			this.currentTrack--;
		} else {
			console.log("You can't go negative number", this.currentTrack);
		}
	}

	setVolume(value) {
		return this.volume = value;
	}

	// To change the volume
	// upVolume() {
	// 	if (this.isPlaying) {
	// 		if (this.volume < this.currentTrack) {
	// 		}
	// 		return this.volume += 2;
	// 	}
	// }
	// lowerVolume() {
	// 	if (this.isPlaying) {
	// 		if (this.volume < this.currentTrack) {
	// 		}
	// 		return this.volume -= 2;
	// 	}
	// }

	statusMusic() {
		// const obj = {
		// CurrentTrack: this.playlist[this.currentTrack],
		// Volume: this.volume,
		// isPlaying: this.isPlaying
		console.log(`Track: ${this.playlist[this.currentTrack]}\nIsPlaying: ${this.isPlaying}\nSoundVol: ${this.volume}`)
	}
}

let myPlaylist = ['song1', 'song2', 'song3', 'song4', 'song5']; // length 4

let app = new MusicPlayer(myPlaylist, 60); // first settings for player music playlist and sound volume

app.setVolume(80); // change sound volume to 80 using setVolume method
app.next();
app.next();
app.next();
app.next();
app.next();
app.previous();
app.previous();
app.previous();

console.log(app.currentTrack, app.playlist.length);
// currentTrack = 7
app.statusMusic();