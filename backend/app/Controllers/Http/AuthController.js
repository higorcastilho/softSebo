'use strict'

const User = use('App/Models/User')

class AuthController {
	async register({ request }) {
		const data = request.only(['name_user', 'email', 'password'])

		const newUser = await User.create(data)

		return newUser
	}

	async authenticate({ response, request, auth }) {
		const { email, password } = request.all()
		const token = await auth.attempt(email, password)

		//const { id } = await auth.getUser()
		//return Object.assign(token, { id } )
		return token
	}

	async show({ auth, params }) {
		//if (auth.user.id !== Number(params.id)) {
			//return 'You cannot see someone elses profile'
		//} 
		return auth.user
	}
}

module.exports = AuthController
