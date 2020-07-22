import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'landingpage',
			component: LandingPage
		},
		{
			path: '/landingpage',
			component: LandingPage
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/home',
			name: 'home',
			//lazy-loaded
			component: () => import('./views/Home.vue')
		},
		{
			path: '/user',
			name: 'user',
			// lazy-loaded
			component: () => import('./views/BoardUser.vue')
		},
		{
			path: '/barcodereader',
			name: 'barcodereader',
			//lazy-loaded
			component: () => import('./views/BarcodeReader.vue')
		}    
	]
})