import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import List from '../components/List.vue'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/detail',
		component: Detail
	// eslint-disable-next-line no-trailing-spaces
	}, 
	{
		path: '/list',
		// eslint-disable-next-line comma-dangle
		component: List,
	}
]
/* eslint-disable eol-last */
export default routes