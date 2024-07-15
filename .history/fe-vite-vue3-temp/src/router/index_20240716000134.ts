// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Helper from '@/views/Help/Helper.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/help',
    name: 'Helper',
    component: Helper,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;