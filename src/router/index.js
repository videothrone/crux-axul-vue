import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/releases',
      name: 'releases',
      component: () => import('../views/releases/Releases.vue'),
    },
    {
      path: '/releases/:releaseDetails',
      name: 'ReleaseDetails',
      component: () => import('../views/releases/ReleaseDetails.vue'),
      props: true,
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/Links.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404.vue'),
    },
  ],
});

export default router;
