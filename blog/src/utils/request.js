import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 创建axios 实例
const server = axios.create({
    timeout: 5000 // 请求超时时间
})

// request 拦截器
server.interceptors.request.use(
    config => {
        /**
         * 发送请求之前做什么 
         * 
         * 设置请求头
         */
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器
server.interceptors.response.use(
    response => {
        /**
         * 响应请求 对数据做统一处理
         * 
         * 根据状态码做统一处理
         */

        return response
    },
    error => {
        Promise.reject(error)
    }
)

export default server
