import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../pages/main-page/MainPage.vue')
    },
    {
      path: '/place',
      name: 'place',
      component: () => import('../pages/place-page/PlacePage.vue')
    },
    {
      path: '/hobbi',
      name: 'hobbi',
      component: () => import('../pages/hobbi-page/HobbiPage.vue')
    },
  ]
})

export default router