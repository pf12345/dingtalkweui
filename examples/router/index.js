import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Alert from '@/components/alert'
import Confirm from '@/components/confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/alert',
    	name: 'Alert',
    	component: Alert
    },
    {
    	path: '/confirm',
    	name: 'Confirm',
    	component: Confirm
    }
  ]
})
