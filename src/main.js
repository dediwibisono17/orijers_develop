import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/css/_style.scss'
import routes from './router/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes })

new Vue({
	render: h => {
		return h(App)
	},
	// eslint-disable-next-line comma-dangle
	router,
}).$mount('#app')
