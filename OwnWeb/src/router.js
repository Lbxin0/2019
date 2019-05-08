import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import News from '@/pages/news/index'
import Project from '@/pages/project/index'
import Blog from '@/pages/blog/index'
import Life from '@/pages/life/index'
import Register from '@/pages/login_regist/regist'
import Login from '@/pages/login_regist/login'
import Source from '@/pages/Source/index'
import SourceBook from '@/pages/Source/book/book'
import BookPannel from '@/pages/Source/book/BookPannel'

// import SourceBook from '@/pages/Source/book/book'
// import SourceBook from '@/pages/Source/book/book'
// import SourceBook from '@/pages/Source/book/book'   

import SourceVideo from '@/pages/Source/video/video'
import SourceCommunity from '@/pages/Source/community/community'
import CommunityPannel from '@/pages/Source/community/communityPannel'
import SourceBlog from '@/pages/Source/blog/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/News',
      name: 'News',
      component: News
    },{
      path: '/Project',
      name: 'Project',
      component: Project
    },{
      path: '/source',
      name: 'Source',
      component: Source,
      children:[
        {
          path:"/source/",
          component:BookPannel,
          redirect:"/source/book"
        },
        {
          path:"/source/book",
          component:SourceBook,
          children:[
            {
              path:"/source/book/:type",
              component:BookPannel,
            },
            {
              path:"/source/book/",
              component:BookPannel,
              redirect:"/source/book/FrontEnd"
            },
          ]
        },{
          path:"/source/video",
          component:SourceVideo
        },{
          path:"/source/Community",
          component:SourceCommunity,
          children:[
            {
              path:"/source/Community/:type",
              component:CommunityPannel,
            },
            {
              redirect:"/source/Community/Designer",
              path:"/source/Community/",
              component:CommunityPannel,
            }
          ]
        },{
          path:"/source/blog",
          component:SourceBlog
        }
      ]
    },{
      path: '/blog',
      name: 'Blog',
      component:Blog
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/Register',
      name: 'Register',
      component: Register
    },{
      path: '/life',
      name: 'life',
      component: Life
    }
  ]
})
