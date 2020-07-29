import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from "@/layout"

NProgress.configure({ showSpinner: false })

const whiteList = ['/home']

router.addRoutes([{
    path: '',
    component: Layout,
    children: [
        {
            path: '/test',
            component: (resolve) => require(['@/views/index/index'], resolve),
            name: 'test',
            meta: { title: '测试' }
        },
        {
            path: '/load',
            component: (resolve) => require(['@/views/CSS/loading'], resolve),
            name: 'loading',
            meta: { title: '加载' }
        }
    ]
}])

router.beforeEach((to, from, next) => {
    NProgress.start()
    store.dispatch('GenerateRoutes').then(accessRoutes => {
        console.log('accessRoutes', accessRoutes)
        // router.addRoutes(accessRoutes) // 动态添加可访问路由表

        console.log(router)
        // next({ ...to, replace: true })
        next()
    })

    if (whiteList.indexOf(to.path) !== -1) {
        // 在免登录白名单，直接进入
        next()
    }
})

router.afterEach(() => {
    NProgress.done()
})
