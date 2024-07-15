import { createApp } from 'vue'
import './base.scss'
import App from './App.vue'
import router from './router/index'; 
import { createPinia } from 'pinia';
import persistedstatePlugin from 'pinia-plugin-persistedstate';
import i18n from './i18n/index';
import { createI18nInstance } from './i18n/index';

// 使用Pinia插件
const pinia = createPinia();
pinia.use(persistedstatePlugin);

const app = createApp(App);

// 在Vue应用中注册路由
app.use(router);
app.use(pinia);
// app.use(i18n);

// 异步创建 i18n 实例并使用它
createI18nInstance().then(i18n => {
  app.use(i18n);
  app.mount('#app');
});
