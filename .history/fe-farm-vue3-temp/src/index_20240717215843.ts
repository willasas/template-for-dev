import { createApp } from 'vue';
import './styles/global.scss';
import './styles/dc.scss';
import App from './App.vue';
import router from './router/index'; 
import { createPinia } from 'pinia';
import { useLangStore } from './stores/index.ts';
import persistedstatePlugin from 'pinia-plugin-persistedstate';
import i18n from './i18n/index';

// 使用Pinia插件
const pinia = createPinia();
pinia.use(persistedstatePlugin);

const app = createApp(App);

// 在Vue应用中注册路由
app.use(router);
app.use(pinia);
// 异步创建 i18n 实例并使用它
app.use(i18n);


// 如果需要的话，可以在这里初始化Pinia的store
app.mount('#app');