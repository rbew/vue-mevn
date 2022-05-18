import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import HeyUI from 'heyui'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
require('heyui/themes/index.less')

Vue.use(VueAxios, axios)
Vue.use(HeyUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
