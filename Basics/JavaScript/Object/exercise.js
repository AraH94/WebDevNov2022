function Book(title, author, year) {
	this.titleBook = title;
	this.authorBook = author;
	this.yearBook = year;

	this.Summary = function () {
		console.log(`Title: ${this.titleBook}\nAuthor: ${this.authorBook}\nYear: ${this.yearBook}}`);
		return { title: this.titleBook, author: this.authorBook, year: this.yearBook }
	}
}

let myBook = new Book('Harry Potter and the Philosopher\'s Stone', 'J. K. Rowling', 2001)
myBook.Summary();
let myBook2 = new Book('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 2002)
myBook2.Summary();
let myBook3 = new Book('Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 2004)
myBook3.Summary();

let selectedBooks = []
selectedBooks.push(myBook.Summary(), myBook2.Summary(), myBook3.Summary());

console.log(selectedBooks);