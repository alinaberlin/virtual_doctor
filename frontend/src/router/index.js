import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/user-list.vue'
import AppointmentList from '../views/appointment-list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/appointments',
    name: 'AppointmentList',
    component: AppointmentList
  },
  {
    /*appointment route */
    path: '/appointments/:id',
    name: 'AppointmentDetail',
    component: () => import('../views/appointment-detail.vue')
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
