import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/features/login/Login.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Login },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
