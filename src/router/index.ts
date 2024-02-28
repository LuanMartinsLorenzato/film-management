import { createRouter, createWebHistory } from 'vue-router'
import TemplateApp from '@/pages/TemplateApp.vue'
import TemplateLogin from '@/pages/TemplateLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: TemplateLogin
    },
    {
      path: '/home',
      name: 'home',
      component: TemplateApp
    },
  ]
})

export default router
