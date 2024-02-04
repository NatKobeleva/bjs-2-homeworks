class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		let fixedState = this._state *= 1.5;
		if (fixedState >= 100) {
			this._state = 100
		} else {
			this._state = fixedState;
		}
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}


	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let foundBook = this.books[i];
				this.books.splice(i, 1);
				return foundBook;
			}
		}
		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark > 2 && mark <= 5) {
			if (!this.marks.hasOwnProperty(subject)) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		}
		let summ = this.marks[subject].reduce((acc, item) => acc + item, 0);
		return summ / this.marks[subject].length;
	}

	getAverage() {
		let subjects = Object.keys(this.marks);
		let summAverage = 0;
		if (subjects.length === 0) {
			return 0;
		}
		for (let i = 0; i < subjects.length; i++) {
			summAverage += this.getAverageBySubject(subjects[i]);
		}
		return summAverage / subjects.length;
	}

}