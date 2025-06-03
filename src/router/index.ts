import BancoReactivosLayout from '@/modules/bancoreactivos/layouts/BancoReactivosLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bancoReactivos',
      component: BancoReactivosLayout,
      children: [
        {
          path: '/banco',
          name: 'banco',
          component: () => import('@/modules/bancoreactivos/view/HomeBanco.vue'),
        },
        // {
        //   path: '/banco',
        //   name: 'banco',
        //   component: () => import('@/modules/bancoreactivos/pages/CompartidosPages.vue'),
        // },
        {
          path: '/compartidos',
          name: 'compartidos',
          component: () => import('@/modules/bancoreactivos/pages/CompartidosPages.vue'),
        },
        {
          path: '/eliminados',
          name: 'eliminados',
          component: () => import('@/modules/bancoreactivos/pages/EliminadosPage.vue'),
        },
      ],
    },
  ],
});

export default router;
