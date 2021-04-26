import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vista1',
    component: () => import('../views/vista1.vue')
  },
  {
    path: '/profile/:id',
    name: 'vista2',
    component: () => import('../views/vista2.vue')
  },
  {
    path: '/favs',
    name: 'vista3',
    component: () => import('../views/vista3.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
