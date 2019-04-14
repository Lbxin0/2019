import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Axios from './http/Axios'
import axios from 'axios'
Vue.prototype.axios=axios;  
axios.defaults.baseURL = 'http://localhost:3000/';  
axios.defaults.timeout=1000,  
//默认的contenttype为json以及utf-8；  
axios.defaults.headers={'Content-Type': 'text/html;charset=gb2312'} 

Vue.config.productionTip = false
new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
