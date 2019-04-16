import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'admin'},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/admin/projects',
      name: 'admin',
      meta: { layout: 'admin' },
      component: () => import('@/components/AdminProjectList.vue')
    },
    {
      path: '/admin/projects/add',
      name: 'addProject',
      meta: { layout: 'admin' },
      component: () => import('@/components/AdminProjectAddEdit.vue')
    },
    {
      path: '/admin/projects/edit',
      name: 'editProject',
      props: true,
      meta: { layout: 'admin' },
      component: () => import('@/components/AdminProjectAddEdit.vue')
    },
    {
      path: '*',
      name: '404',
      component: require("@/views/404.vue").default
    }
  ]
})
