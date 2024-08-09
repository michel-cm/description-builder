import type { RouterOptions } from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions>{
  routes: () => [
    {
      name: 'main',
      path: '/',
      component: () => import('../views/MainView/MainView.vue'),
    },
    {
      name: 'solo',
      path: '/solo',
      component: () => import('../views/Solo/Solo.vue'),
    },
    {
      name: 'grapejs',
      path: '/grapejs',
      component: () => import('../views/Grapejs/Grapejs.vue'),
    }
  ],
};
