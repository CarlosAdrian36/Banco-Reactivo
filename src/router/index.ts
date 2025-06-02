import BancoReactivosLayout from '@/modules/bancoreactivos/layouts/BancoReactivosLayout.vue';
import BancosPages from '@/modules/bancoreactivos/pages/BancosPages.vue';
import CompartidosPages from '@/modules/bancoreactivos/pages/CompartidosPages.vue';
import EliminadosPage from '@/modules/bancoreactivos/pages/EliminadosPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bancoReactivos',
      component: BancoReactivosLayout,
    },
    {
      path: '/bancos',
      name: 'banco',
      component: BancosPages,
    },
    {
      path: '/compartidos',
      name: 'compartidos',
      component: CompartidosPages,
    },
    {
      path: '/eliminados',
      name: 'eliminados',
      component: EliminadosPage,
    },
  ],
});

export default router;
