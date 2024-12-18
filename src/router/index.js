import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/IndexPage.vue'),
    },
    {
      path: '/question/:subject',
      name: 'question',
      component: () => import('@/views/QuestionPage.vue'),
    },
  ],
})

export default router
