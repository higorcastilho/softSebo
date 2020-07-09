'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookAuthorSchema extends Schema {
  up () {
    this.create('book_authors', (table) => {
    	table.increments()
    	table
	 	.integer('id_book')
	 	.unsigned()
	 	.notNullable()
	 	.references('id')
	 	.inTable('books')
		.onUpdate('CASCADE')
	 	.onDelete('CASCADE')
		table
		.integer('id_author')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('authors')
		.onUpdate('CASCADE')
		.onDelete('CASCADE')
    	table.timestamps()
    })
  }

  down () {
    this.drop('book_authors')
  }
}

module.exports = BookAuthorSchema
