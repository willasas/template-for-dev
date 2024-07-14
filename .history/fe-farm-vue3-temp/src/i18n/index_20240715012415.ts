import { createI18n } from 'vue-i18n';
import en from './en/en-US';
import zh from './zh/zh-CN';

const i18n = createI18n({
  locale: sessionStorage.getItem('localeLang') || 'zh' , // 默认语言是中文
  fallbackLocale: 'en', // 语言切换的时候是英语
  messages: {
    zh,
    en
  },  // 本地messages,即需要做国际化的语种
  globalInjection: true, // 全局注册$t
  legacy: false, // 使用Composition API时设置为false
});

export default i18n;