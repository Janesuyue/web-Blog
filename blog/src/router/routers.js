export default [
    {
        path: '/',
        redirect: '/home',
        component: () => import('../layout/Layout.vue'),
        children: [
            // { path: 'home', name: 'home', meta: { key: '0', title: '首页' }, component: () => import('../views/index/index.vue') },
            { path: 'home', name: 'home', meta: { key: '0', title: '首页' }, component: () => import('../views/test/index.vue') },

            // { path: 'user', name: 'user', meta: { key: '0', title: '用户' }, component: () => import('../views/user/user.vue') },
            // { path: 'category', name: 'category', meta: { key: '0', title: '商品' }, component: () => import('../views/products/products.vue') }
        ]
    }
]