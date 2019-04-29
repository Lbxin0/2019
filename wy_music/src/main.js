import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import store from './store/index.js'
// import vueAwesomeSwiper from 'vue-awesome-swiper'
import promise from 'es6-promise'
promise.polyfill()
// vue.use(Vuex)
import axios from 'axios'
axios.defaults.baseURL = 'http://123.56.221.77/musicApi'
// axios.defaults.baseURL = 'http://api.mtnhao.com'


// vue.use(vueAwesomeSwiper)
Vue.config.productionTip = false



// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
