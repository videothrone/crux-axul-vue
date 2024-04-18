import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Home.vue'),
    },
    {
      path: '/releases',
      name: 'releases',
      component: () => import('../views/Releases/Releases.vue'),
    },
    {
      path: '/releases/:releaseDetails',
      name: 'ReleaseDetails',
      component: () => import('../views/Releases/ReleaseDetails.vue'),
      props: true,
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/links/Links.vue'),
    },
     {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/page-404/Page-404.vue'),
    },
  ],
});

export default router;
