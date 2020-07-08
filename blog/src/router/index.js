import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from "../layout/Layout.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: '首页',
    children: [
      { path: 'home', component: () => import('../views/test/index') },
      // { path: 'home', component: () => import('../views/index/index') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
