// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
// import router from './router'
import VueRouter from 'vue-router'
import Axios from 'axios'
import IndexPage from './pages/index'

Vue.prototype.$http = Axios
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		// {
		// 	path: '/orderList',
		// 	component: OrderListPage
		// },
		// {
		// 	path: '/detail',
		// 	component: DetailPage,
		// 	redirect: '/detail/analysis',
		// 	children: [
		// 		{
		// 			path: 'analysis',
		// 			component: DetailAnaPage
		// 		},
		// 		{
		// 			path: 'count',
		// 			component: DetailCouPage
		// 		},
		// 		{
		// 			path: 'forecast',
		// 			component: DetailForPage
		// 		},
		// 		{
		// 			path: 'publish',
		// 			component: DetailPubPage
		// 		}
		// 	]
		// }
	]
}) 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
