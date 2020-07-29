import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 自定义组件注册
import AppRegister from "./support/AppRegisterCore"

import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的

// import './permission'

import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'
import 'github-markdown-css/github-markdown.css'

import "./assets/styles/root.css"
import './assets/styles/reset.css'
import "./assets/styles/animate.css"
import "./assets/styles/main.css"
import "./assets/styles/common.css"
import "./assets/styles/precode.css"

import Highlight from './assets/highlight';


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mavonEditor)  //让Vue使用mavonEditor
Vue.use(Highlight);
Vue.use(AppRegister)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
