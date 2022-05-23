import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import HeyUI from 'heyui'

import App from './App.vue'
import router from './router'

// require('heyui/themes/index.less')
import 'bootstrap/dist/css/bootstrap.min.css'
// import zh from 'heyui/dist/locale/zh-CN'

Vue.use(VueAxios, axios)
// Vue.use(HeyUI, {locale: zh})

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
