import axios from 'axios'
import Book from '../models/Book.js'

class BookSearchEngine extends Book {
	constructor(isbn_10, isbn_13, title_book, subtitle_book, image_link_book, author_name) {
		super(isbn_10, isbn_13, title_book, subtitle_book, image_link_book, author_name)
	}

	getValidateIsbn(isbn) {
		if (isbn.length !== 13 || isbn.substring(0, 3) !== '978') return false;

		const isbnDigit = parseInt(isbn[isbn.length - 1])
		let multiplier = 0

		const isbnSum = isbn
			.substring(0, 12)
			.split('')
			.reduce((total, num) => {
				multiplier = multiplier === 1 ? 3 : 1
				return total + parseInt(num) * multiplier
			}, 0)
		const validDigit = 10 - (isbnSum % 10)

		return isbnDigit === validDigit
	}

	getGoogleBooksApi(isbn) {

		const GOOGLE_API_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn'
		axios.get(`${GOOGLE_API_URL}:${isbn}`).then(res => {

			var subtitle = res.data.items[0].volumeInfo.subtitle
			var image = res.data.items[0].volumeInfo.imageLinks
			var author = res.data.items[0].volumeInfo.authors[0]
			this.isbn_10 = res.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
			this.isbn_13 = res.data.items[0].volumeInfo.industryIdentifiers[1].identifier, 
			this.title_book = res.data.items[0].volumeInfo.title, 
			this.subtitle_book = subtitle ? subtitle : '', 
			this.image_link_book = image ? res.data.items[0].volumeInfo.imageLinks.smallThumbnail : '', 
			this.author_name = author ? res.data.items[0].volumeInfo.authors[0] : ''

			this.storageBook()
			alert("Livro salvo com sucesso.")

		}).catch(err => {
			console.log(err)
		})
	}
}

export default new BookSearchEngine()
