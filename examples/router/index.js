import Vue from 'vue'
import Router from 'vue-router'
import Hello from './../components/Hello.vue'
import Alert from './../components/alert.vue'
import Confirm from './../components/confirm.vue'
import Loading from './../components/loading.vue'
import Actionsheet from './../components/actionsheet.vue'
import Modal from './../components/modal.vue'
import PreviewImage from './../components/previewImage.vue'

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
    },
    {
      path: '/previewImage',
      name: 'PreviewImage',
      component: PreviewImage
    }
  ]
})
