'use strict'
const Book = use('App/Models/Book')
const Author = use('App/Models/Author')
const BookAuthor = use('App/Models/BookAuthor')
const Database = use('Database')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with bookauthors
 */
class BookAuthorController {
  /**
   * Show a list of all bookauthors.
   * GET bookauthors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const book_author = await Database
      .select('*')
      .from('books')
      .innerJoin('book_authors', 'books.id', 'book_authors.id_book')
      .innerJoin('authors', 'book_authors.id_author', 'authors.id')
      .where('fk_id_user', auth.user.id)
    return book_author
  }

  /**
   * Render a form to be used for creating a new bookauthor.
   * GET bookauthors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new bookauthor.
   * POST bookauthors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {


    const data = request.body

    /*const data = request.only([
      `items[0].volumeInfo.industryIdentifiers[1].identifier`,
      `items[0].volumeInfo.industryIdentifiers[0].identifier`, 
      `items[0].volumeInfo.title`, 
      `items[0].volumeInfo.subtitle`])
    var imgLink = request.only([`items[0].volumeInfo.imageLinks.smallThumbnail`])*/
    const data_authors = data.author_name

    const book = await Book.create({ 
      fk_id_user: auth.user.id,  
      isbn_10: data.isbn_10,
      isbn_13: data.isbn_13,
      title_book: data.title_book,
      subtitle_book: data.subtitle_book,
      image_link_book: data.image_link_book
    })

    var author = await Author.create({
        name_author: data_authors ? data_authors : ''
    }) 

    /*if (data_authors) {
      var author = await Author.create({
        name_author: data_authors  
      }) 
    } else {
      var author = await Author.create({
        name_author: ''
      })
    }*/

    const book_author = await BookAuthor.create({
      id_book: book.id,
      id_author: author.id
    })

    console.log(book)
    return book_author 
  }

  /**
   * Display a single bookauthor.
   * GET bookauthors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing bookauthor.
   * GET bookauthors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update bookauthor details.
   * PUT or PATCH bookauthors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a bookauthor with id.
   * DELETE bookauthors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BookAuthorController
