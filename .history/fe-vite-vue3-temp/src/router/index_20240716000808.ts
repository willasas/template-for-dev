// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

// 显式导入每个视图组件
const Home = defineAsyncComponent(() => import('../views/Home/Home.vue'));
const Helper = defineAsyncComponent(() => import('../views/Help/Helper.vue'));

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

// 添加全局守卫
router.beforeEach((to, from, next) => {
  // 在这里添加你的守卫逻辑
  next();
});

export default router;