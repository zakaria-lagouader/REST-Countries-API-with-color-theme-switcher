import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/country/:code',
        name: 'Country',
        component: () => import('./pages/Country.vue')
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router