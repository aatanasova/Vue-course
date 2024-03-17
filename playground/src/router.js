import TestPage from './views/TestPage.vue'
import HomePage from './views/HomePage.vue'

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/test',
        component: TestPage
    }
]