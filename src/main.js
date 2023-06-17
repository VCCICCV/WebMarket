import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 初始化样式文件
import '@/styles/common.scss'
// svg
import '@/assets/fonts/iconfont.css'

import {lazyPlugin} from '@/directives/index'
createApp(App).use(router).use(createPinia()).use(lazyPlugin).mount('#app')
