import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index.vue'
import Alert from './../components/alert.vue'
import Confirm from './../components/confirm.vue'
import Loading from './../components/loading.vue'
import Actionsheet from './../components/actionsheet.vue'
import Modal from './../components/modal.vue'
import PreviewImage from './../components/previewImage.vue'
import DatePicker from './../components/datepicker.vue'
import DropDown from './../components/dropdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
    },
    {
      path: '/datepicker',
      name: 'DatePicker',
      component: DatePicker
    },
    {
      path: '/dropdown',
      name: 'DropDown',
      component: DropDown
    }
  ]
})
