// Movie App - Prototype
/*
@Properties
	title : String
	poster_front : String (url)
	poster_back : String (url)
	imdb_score : Number
	movie_year : Number
	movie_genres : ArrayList
	user_rating : Number
	movie_duration : Number
	director : String
	movie_trailer : String (url)
	movie_description : String (long-text)
	original_language : String
	production_company : String
	actors : ArrayList`
*/

// const MovieTitleInput = document.getElementById('movie_title');
const Inputs = document.querySelectorAll('input') // input => tagname html file

function MovieApplication() {
	this.movies = []
}

// Add Movie Method
MovieApplication.prototype.addMovie = function (obj) { // prototype allows you to put anything in your obstructor
	// console.log(obj);
	return this.movies.push(obj) // inserts obj into this.movies array list
}

MovieApplication.prototype.ClickHandler = function () {
	this.addMovie({
		title: Inputs[0].value,
		poster_front: Inputs[1].value,
		poster_back: Inputs[2].value,
		imdb_score: Inputs[3].value,
		movie_year: Inputs[4].value,
		movie_genres: Inputs[5].value.split(','), // Arraylist
		user_rating: Inputs[6].value,
		movie_duration: Inputs[7].value,
		director: Inputs[8].value,
		movie_trailer: Inputs[9].value,
		movie_description: Inputs[10].value,
		original_language: Inputs[11].value,
		production_company: Inputs[12].value,
		actors: Inputs[13].value.split(',') // Arraylist
	})
	console.log(this.movies);
}

let app = new MovieApplication();
// app.addMovie({ title: 'Hello World' });
