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
import DropDown from './../components/dropdown.vue'
import Toast from './../components/toast.vue'
import Mutipicker from './../components/mutipicker.vue'
import Cascadepicker from './../components/cascadepicker.vue'
import UploadImage from './../components/uploadImage.vue'

import Buttons from './../components/buttons.vue';
import Input from './../components/input.vue';
import Radio from './../components/radio.vue';
import Swiper from './../components/swiper.vue';
import cardView from './../components/cardView.vue';

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
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/mutipicker',
      name: 'Mutipicker',
      component: Mutipicker
    },
    {
      path: '/cascadepicker',
      name: 'Cascadepicker',
      component: Cascadepicker
    },
    {
      path: '/uploadImage',
      name: 'UploadImage',
      component: UploadImage
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/cardView',
      name: 'cardView',
      component: cardView
    }
  ]
})
