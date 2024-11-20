import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'
// 导入路由模块
import router from './router'
// 导入ElementPlus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入createPinia函数
import { createPinia } from 'pinia'
import "@/api/mock.js"
import api from '@/api/api'

const pinia = createPinia()
const app = createApp(App)


app.config.globalProperties.$api = api
app.use(router)
app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }