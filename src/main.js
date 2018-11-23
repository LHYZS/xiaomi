import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import ElementUI from 'element-ui'
import store from './store'
import axios from 'axios'

Vue.use(jquery)
Vue.use(bootstrap)
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
