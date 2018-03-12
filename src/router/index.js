import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Content from '@/pages/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    }
  ]
})
