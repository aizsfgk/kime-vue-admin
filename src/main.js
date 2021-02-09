// 导入必要的文件
import Vue from 'vue'
// 导入css文件
import 'normalize.css/normalize.css'
// 导入element模板
import ElementUI from 'element-ui'
// element css
import 'element-ui/lib/theme-chalk/index.css'

// 导入全局css
import '@/styles/index.scss'

// 导入本地文件
import App from './App.vue'
import store from './store'
import router from './router'

import '@/icons'

console.log(process.env)

// 使用ElementUI组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
