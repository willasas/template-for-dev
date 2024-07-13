import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18n = createI18n({
  locale: 'en', // 设置默认语言
  globalInjection: true, // $t启用全局注册
  messages,
  legacy: false, // 使用 Vue 3 Composition API 必须设置为 false
});

export default i18n;