import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import UsersPage from './views/UsersPage.vue'


export const routes = [
    {
        path: '/',
        component: () => import("./views/HomePage.vue")
    },

    {
        path: '/login',
        component: () => import("./views/LoginPage.vue")
    },
    {
        path: '/user',
        component: () => import("./views/UsersPage.vue")
    },
    {
        path: '/user/:name',
        component: () => import("./views/UserProfile.vue")
    },
    {
        path: '/dashboard',
        component: () => import("./views/DashboardPage.vue")
    },


]