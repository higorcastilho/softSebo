'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table
      .integer('fk_id_user')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
      .integer('fk_id_category')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      /*table
      .integer('fk_id_author')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('authors')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')*/
      table.string('isbn_10', 10)
      table.string('isbn_13', 13)
      table.string('title_book', 50).notNullable()
      table.string('subtitle_book', 50)
      table.string('language_book', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema

//Title
//Subtitle
//Authors
//Publisher
//PublishedDate
//Description
//ISBN_13
//ISBN_10
//PageCount
//Categories
//imagelink
//language