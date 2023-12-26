import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/Logout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router