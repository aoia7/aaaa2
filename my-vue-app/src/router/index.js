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
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/user.vue')
            },
            {
                path: 'mall',
                name: 'mall',
                component: () => import('@/views/mall.vue')
            },
          
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router