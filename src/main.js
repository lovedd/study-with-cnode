// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用api文件
import api from '@/api/index.js'
// 引用utils文件
import utils from '@/utils/index.js'
// 将$api方法绑定到全局，方便调用
Vue.prototype.$api = api
// 将$utils方法绑定到全局，方便调用
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
