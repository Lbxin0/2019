import Vue from 'vue'
import Router from 'vue-router'
// import navigation from 'navigation';
// Vue.use(navigation);
Vue.use(Router)

import  Home from '@/pages/home/home'
import  finance from '@/pages/financial/index'

export default new Router({
  routes: [ 
    { 
      path:'/',
      name:'home',
      component:Home
    },
    { 
      path:'/home',
      name:'home',
      component:Home
    },
    { 
      path:'/finance',
      name:'finance',
      component:finance
    }
  ]
})