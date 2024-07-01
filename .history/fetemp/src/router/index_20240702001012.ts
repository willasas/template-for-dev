import { createRouter, createWebHistory } from 'vue-router';
// 引入你的路由组件
import Home from '../views/Home/Home.vue';
import About from '../views/About/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // 添加更多路由...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;