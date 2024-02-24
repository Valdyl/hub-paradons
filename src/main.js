import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import Home from '@/views/Home.vue'


const routes =[
    {
        name:'Home',
        path: '/',
        component:Home
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
    .use(pinia)
    .mount('#app')