import Vue from 'vue'
import VueRouter from 'vue-router'
import ProView from '../views/ProjectView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: ProView
  },
  {
    path: '/blog',
    name: 'blog',

    component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
  },
  {
    path: '/blogdetails',
    name: 'blogdetails',
    component: () => import('../views/BlogDetailsView.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/NotFoundView.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
