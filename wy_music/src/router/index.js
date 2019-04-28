import Vue from 'vue'
import Router from 'vue-router'
// import navigation from 'navigation';
// Vue.use(navigation);

import Find from '@/components/find'
import pannelT from '@/pages/find/pannelT'
import Video from '@/pages/videos/video'
import Music from '@/pages/music/index'
import Songpannel from '@/pages/music/songSheetP'
import Lvideo from '@/pages/Lvideo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Find',
      component:Find
    },
    {
      path:'/find',
      // redirect: '/',
      name:'find',
      component:Find,
      children:[
        {
          path: '/pannelT/:pannerid',
          name: 'Find/pannelT',
          component:pannelT
        }

      ]
    },{
      path:'/pannelT',
      components:
      {pannellist:Songpannel}
      ,
      name:'pannelT'
    },{
      path:'/video',
      // redirect: '/',
      name:'video',
      component:Video
    },
    {
      path:'/music',
      // redirect: '/',
      name:'Music',
      component:Music
    },
    {
      path:'/Lvideo',
      // redirect: '/',
      name:'Lvideo',
      component:Lvideo
    }
    
  ]
})
