import { createI18n } from 'vue-i18n';
import { LOCAL_KEY } from './local-key';
import en from './en/en-US';
import zh from './zh/zh-CN';

const i18n = createI18n({
  locale: localStorage.getItem('language') || "zh", // 默认语言是中文
  fallbackLocale: 'en', // 语言切换的时候是英语
  messages: {en, zh},  // 本地messages,即需要做国际化的语种
  globalInjection: true, // 全局注册$t
  legacy: false,
});

export default i18n;