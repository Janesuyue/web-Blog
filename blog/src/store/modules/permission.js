import { constantRoutes } from '@/router'
import Layout from '@/layout'

const routerList = [
    {
        path: '',
        component: 'Layout',
        children: [
            {
                path: '/test',
                component: 'index/index',
                name: 'test',
                meta: { title: '测试' }
            },
            {
                path: '/load',
                component: 'CSS/loading/index',
                name: 'loading',
                meta: { title: '加载' }
            }
        ]
    }
]

const permission = {
    state: {
        routes: [],
        addRoutes: []
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        GenerateRoutes({ commit }) {
            return new Promise(resolve => {
                // console.log(routerList)
                const accessedRoutes = filterAsyncRouter(routerList)
                // console.log(accessedRoutes)
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
}

// 遍历路由字符串, 转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
    return asyncRouterMap.filter(route => {
        if (route.component) {
            // Layout组件特殊处理
            if (route.component == 'Layout') {
                route.component = Layout
                // route.component = (resolve) => require([`@/layout`], resolve)
            } else {
                route.component = loadView(route.component)
            }
        }
        if (route.children != null && route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
}

export const loadView = (view) => { // 路由懒加载
    return (resolve) => require([`@/views/${view}`], resolve)
}

export default permission