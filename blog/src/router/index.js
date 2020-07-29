import Vue from 'vue'
import Router from 'vue-router'

import Layout from "@/layout"

Vue.use(Router)

export const constantRoutes = [
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: (resolve) => require(['@/views/redirect'], resolve)
  //     }
  //   ]
  // },
  {
    path: '',
    component: Layout,
    redirect: '/loading',
    children: [
      {
        path: '/',
        name: '首页',
        component: (resolve) => require(['@/views/index'], resolve)
      },
      {
        path: '/loading',
        name: 'CSS',
        component: (resolve) => require(['@/views/CSS/loading'], resolve)
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
