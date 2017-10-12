import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedApple from '@/components/redApple'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
    	path: '/apple',
    	name: 'Apple',
    	component: Apple,
    	children: [
    		{
    			path: 'red',
    			component: RedApple
    		}
    	]
    },
    {
    	path: '/banana',
    	name: 'Banana',
    	component: Banana
    }
  ]
})
