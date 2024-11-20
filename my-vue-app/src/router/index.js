import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/main.vue'),
        redirect: '/home',
        children:[
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router