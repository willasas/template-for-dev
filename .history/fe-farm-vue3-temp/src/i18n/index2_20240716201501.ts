import { createI18n } from 'vue-i18n';
import en from './locales/en-US';
import zh from './locales/zh-CN';
import ja from './locales/ja-JP';
import ar from './locales/ar-SA';
import de from './locales/de-DE';
import enCA from './locales/en-CA';
import af from './locales/af-ZA';

const i18n = createI18n({
  locale: sessionStorage.getItem('localeLang') || 'zh' , // 默认语言是中文
  fallbackLocale: 'en', // 语言切换的时候是英语
  messages: {
    zh,
    en,
    ja,
    ar,
    de,
    enCA,
    af,
  },  // 本地messages,即需要做国际化的语种
  globalInjection: true, // 全局注册$t
  legacy: false, // 使用Composition API时设置为false
});

export default i18n;