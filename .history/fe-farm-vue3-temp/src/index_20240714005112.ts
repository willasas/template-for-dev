import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // 引入路由
import { createPinia } from 'pinia';
import { useUserStore } from './stores/user';
import persistedstatePlugin from 'pinia-plugin-persistedstate';
import { setupLanguage } from './i18n/index';

// 使用Pinia插件
const pinia = createPinia();
pinia.use(persistedstatePlugin);

const app = createApp(App);

// 在Vue应用中注册路由
app.use(router);
app.use(pinia);
setupLanguage(app).then(() => {
  app.mount('#app');
});


// 如果需要的话，可以在这里初始化Pinia的store
// app.mount('#app');