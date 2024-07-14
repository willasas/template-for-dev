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


import { createI18n } from 'vue-i18n';
import { loadMessages } from './loadMessages';

const i18nDir = join(__dirname, '..'); // i18n目录的路径

// 动态加载所有语言文件
const messages = await loadMessages(i18nDir);

const i18n = createI18n({
  locale: sessionStorage.getItem('localeLang') || 'zh-CN',
  fallbackLocale: 'en-US',
  messages,
  globalInjection: true,
  legacy: false,
});

export default i18n;