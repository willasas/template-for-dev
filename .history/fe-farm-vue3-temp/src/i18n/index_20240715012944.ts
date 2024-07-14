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

// 动态加载所有语言包
const localesPath = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.js$/i);
const messages = {};
localesPath.keys().forEach(key => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i);
  const fileName = matched && matched[1];
  messages[fileName] = localesPath(key).default || localesPath(key);
});

const i18n = createI18n({
  locale: sessionStorage.getItem('localeLang') || 'zh',
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  legacy: false,
});

export default i18n;