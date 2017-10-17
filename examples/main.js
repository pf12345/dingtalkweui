// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import dingtalkweui from '../src/index';
import { ajaxGet } from './assets/js/ajax';

Vue.use(dingtalkweui, {
	platform: 'dingding'
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
  	ajaxGet
  }
})
