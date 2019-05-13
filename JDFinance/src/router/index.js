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
import  SaveMoney from '@/pages/SaveMoney/index'
import  BorrowM from '@/pages/SaveMoney/BorrowM'
import  SaveM from '@/pages/SaveMoney/SaveM'
import  MyM from '@/pages/SaveMoney/MyM'

export default new Router({
  routes: [
    { 
      path:'/SaveMoney',
      name:'SaveMoney',
      component:SaveMoney,
      children:[
        {
          path:"/SaveMoney/BorrowM",
          name:'BorrowM',
          component:BorrowM
        },
        {
          path:"/SaveMoney/",
          name:'BorrowM',
          component:BorrowM,
        },
        {
          path:"/SaveMoney/SaveM",
          name:'SaveM',
          component:SaveM,
        },
        {
          path:"/SaveMoney/MyM",
          name:'MyM',
          component:MyM,
        }
      ]
    }, 
    { 
      path:'/',
      name:'redirect',
      redirect:'/home'
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
