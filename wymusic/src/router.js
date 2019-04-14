import Vue from 'vue'
import Router from 'vue-router'

import Find from '@/views/find/index'
import Video from '@/views/video/index'
import Own from '@/views/own/index'
import Friend from '@/views/friends/index'
import Account from '@/views/account/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      name:'index',
      component:Find
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path:'/video',
      name:'video',
      component:Video
    },
    {
      path:'/own',
      name:'own',
      component:Own
    },
    {
      path:'/firend',
      name:'firend',
      component:Friend
    },
    {
      path:'/account',
      name:'account',
      component:Account
    }

  ]
})
