import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3333/'

class UserService {
	getPublicContent() {
		return axios.get(API_URL + 'all')
	}

	getUserBoard() {
		return axios.get(API_URL + 'users/:id', { headers: authHeader() })
	}

	getAdminBoard() {
		return axios.get(API_URL + 'admin', { headers: authHeader() })
	}

	getUserBooks() {
		return axios.get(API_URL + 'book_authors', { headers: authHeader() })
	}

}

export default new UserService()
