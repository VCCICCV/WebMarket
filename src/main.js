import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 初始化样式文件
import '@/styles/common.scss'
// import {lazyPlugin} from '@/directives/index'
createApp(App).use(router).use(createPinia()).mount('#app')
