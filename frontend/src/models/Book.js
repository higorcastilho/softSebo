import axios from 'axios'
import authHeader from '../services/auth-header.js'
const API_URL = 'http://localhost:3333/'

export default class Book {

	constructor(isbn_10, isbn_13, title_book, subtitle_book, image_link_book, author_name) {
		this.isbn_10 = isbn_10
		this.isbn_13 = isbn_13
		this.title_book = title_book
		this.subtitle_book = subtitle_book
		this.image_link_book = image_link_book
		this.author_name = author_name
	}
	
	getIsbn_10() { return this.isbn_10 }

	getIsbn_13() { return this.isbn_13 }

	getTitle_book() { return this.title_book }

	getSubtitle_book() { return this.subtitle_book }

	getImage_link_book() { return this.image_link_book }

	storageBook() {
		return axios.post(API_URL + 'book_authors', {

			isbn_10: this.isbn_10,
			isbn_13: this.isbn_13, 
			title_book: this.title_book, 
			subtitle_book: this.subtitle_book, 
			image_link_book: this.image_link_book, 
			author_name: this.author_name

	}, { headers: authHeader() }).then(res => {
		console.log(res)
	}).catch((err) => {
		console.log(err)
	})
}

}
