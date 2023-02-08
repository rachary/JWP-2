import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '../views/DestinationView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/destinasi',
        name: 'destinasi',
        component: DestinationView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'router-link-active',
    
})

export default router;