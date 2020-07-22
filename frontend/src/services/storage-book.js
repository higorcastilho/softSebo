import axios from 'axios'

const API_URL = 'http://localhost:3333/'

export default function storageBook(isbn_10, isbn_13, title_book, subtitle_book, image_link_book, author_name) {
	return axios.post(API_URL + 'book_authors', {

		isbn_10,
		isbn_13, 
		title_book, 
		subtitle_book, 
		image_link_book, 
		author_name

	}).then(res => {
		console.log(res)
	}).catch((err) => {
		console.log(err)
	})
}