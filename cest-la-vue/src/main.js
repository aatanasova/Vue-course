import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

const app = createApp(App)


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
