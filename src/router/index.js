import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Basic from '@/views/basic'
import Skill from '@/views/skill'
import Education from '@/views/education'
import Works from '@/views/works'
import Job from '@/views/job'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    }
  ]
})
