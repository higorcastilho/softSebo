'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
	belongs_book_author() {
		return this.belongsTo('App/Models/BookAuthor')
	}
}

module.exports = Author
