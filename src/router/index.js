import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Skills from '@/components/Skills/Skills'
import Work from '@/components/Work/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
