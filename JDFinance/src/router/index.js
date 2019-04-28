import Vue from 'vue'
import Router from 'vue-router'
// import navigation from 'navigation';
// Vue.use(navigation);
Vue.use(Router)

import  Home from '@/pages/home/home'
import  finance from '@/pages/financial/index'
import  BaiTiao from '@/pages/baitiao/index'  
import  CrowdFunding from '@/pages/crowdfunding/index'
import  FreePacket from '@/pages/freePacket/index'
import  Relax from '@/pages/relax/index'

export default new Router({
  routes: [ 
    { 
      path:'/',
      name:'redirect',
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
    },
    { 
      path:'/baitiao',
      name:'BaiTiao',
      component:BaiTiao
    },
    { 
      path:'/crowdfunding',
      name:'CrowdFunding',
      component:CrowdFunding
    },
    { 
      path:'/freePacket',
      name:'FreePacket',
      component:FreePacket
    },
    { 
      path:'/relax',
      name:'relax',
      component:Relax
    }
  ]
})
