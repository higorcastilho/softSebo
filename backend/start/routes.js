'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('/users/:id', 'AuthController.show').middleware('auth')
Route.get('/all', 'AppController.index')

//Route.get('/app', 'AppController.index').middleware(["auth"])

Route.group(() => {
	Route.resource('categories', 'CategoryController')
	.apiOnly()
	.except('update')
	Route.resource('authors', 'AuthorController')
	.apiOnly()
	.except('update')
	Route.resource('books', 'BookController')
	.apiOnly()
	.except('update')
	Route.resource('book_authors', 'BookAuthorController')
	.apiOnly()
	.except('update')
}).middleware('auth')