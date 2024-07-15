// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Help from '@/views/Help/Help.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;