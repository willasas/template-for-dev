import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // 引入路由
import { createPinia } from 'pinia';
import i18n from './i18n/i18n';
import { useUserStore } from './stores/user';
import persistedstatePlugin from 'pinia-plugin-persistedstate';
import { createI18n } from 'vue-i18n';

// 定义i18n
// const i18n = createI18n({
//   legacy: false,
//   locale: 'zh-CN',
//   messages: {
//     'zh-CN': require('./i18n/zh/zh-CN.json'),
//     'en-US': require('./i18n/en/en-US.json'),
//   },
// });

// 使用Pinia插件
const pinia = createPinia();
pinia.use(persistedstatePlugin);

const app = createApp(App);

// 在Vue应用中注册路由
app.use(router);
app.use(pinia);
// app.use(i18n);


// 如果需要的话，可以在这里初始化Pinia的store
app.mount('#app');