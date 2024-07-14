import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // 引入路由
import { createPinia } from 'pinia';
import { useUserStore } from './stores/user';
import persistedstatePlugin from 'pinia-plugin-persistedstate';
import { setupLanguage, setLanguage } from './i18n/index';
import messages from './i18n/local-key';
import VueI18n, { createI18n } from 'vue-i18n';
import { create } from 'domain';

// 使用Pinia插件
const pinia = createPinia();
pinia.use(persistedstatePlugin);

const app = createApp(App);

// 在Vue应用中注册路由
app.use(router);
app.use(pinia);

const i18n = createI18n({
  locale: 'en',
  messages,
});

app.config.globalProperties.$i18n = i18n.global;

app.use(i18n);


// 如果需要的话，可以在这里初始化Pinia的store
app.mount('#app');