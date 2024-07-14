// import { createI18n } from 'vue-i18n';
// import en from './en/en-US';
// import zh from './zh/zh-CN';
// import ja from './jp/ja-JP';

// const i18n = createI18n({
//   locale: sessionStorage.getItem('localeLang') || 'zh' , // 默认语言是中文
//   fallbackLocale: 'en', // 语言切换的时候是英语
//   messages: {
//     zh,
//     en,
//     ja,
//   },  // 本地messages,即需要做国际化的语种
//   globalInjection: true, // 全局注册$t
//   legacy: false, // 使用Composition API时设置为false
// });

// export default i18n;

// src/i18n/index.ts
import { createI18n } from 'vue-i18n';
import i18nConfig from './loadMessages'; // 假设你的配置导出了 loadMessages 函数

const locale = sessionStorage.getItem('localeLang') || 'zh';
const fallbackLocale = 'en';

const messages = await i18nConfig.loadMessages('./src/i18n'); // 指定语言文件的目录

const i18n = createI18n({
  locale,
  fallbackLocale,
  messages,
  globalInjection: true,
  legacy: false,
});

export default i18n;