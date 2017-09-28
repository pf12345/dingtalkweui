import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Alert from '@/components/alert'
import Confirm from '@/components/confirm'
import Loading from '@/components/loading'
import Actionsheet from '@/components/actionsheet'
import Modal from '@/components/modal'

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
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/actionsheet',
      name: 'Actionsheet',
      component: Actionsheet
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }
  ]
})
