import type { RouterOptions } from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions>{
  routes: () => [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/MainView/MainView.vue'),
    },
  ],
};
