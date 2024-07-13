import { createI18n } from 'vue-i18n';
import { LOCAL_KEY } from './local-key';
import en from './en-US';
import zh from './zh-CN';
// 动态导入其他语言文件的函数
function importMessages(langCode: string) {
  switch (langCode) {
    case 'en':
      return import('./en-US').then((module) => module.default);
    case 'zh':
      return Promise.resolve(zh); // 已经导入，直接返回
    // 可以继续添加其他语言的case
    default:
      return Promise.resolve(zh); // 默认返回中文
  }
}

type I18nTypeEnum = typeof zh;

// 初始加载默认语言包
let messages: Record<string, I18nTypeEnum> = {
  'zh': zh
};

const lang = localStorage.getItem(LOCAL_KEY.LANGUAGE) || 'zh';

// 创建 i18n 实例，初始不传 messages，等待动态加载
const i18n = createI18n({
  locale: lang,
  globalInjection: true,
  legacy: false,
});

const { setLocaleMessage, locale } = i18n.global;

/** @description 设置语言
 * @param langCode 语言代码
 */
// const setLanguage = async (langCode: string) => {
//   const messagesData = await importMessages(langCode);
//   setLocaleMessage(langCode, messagesData);
//   locale.value = langCode;
//   localStorage.setItem(LOCAL_KEY.LANGUAGE, langCode);
// };

const setLanguage = async (langCode: string) => {
  const messagesData = await importMessages(langCode);
  setLocaleMessage(langCode, messagesData);
  locale.value = langCode;
  localStorage.setItem(LOCAL_KEY.LANGUAGE, langCode);
  app.config.globalProperties.$i18n.locale = langCode; // 通知全局
};

/** @description 挂载 */
const setupLanguage = (app) => {
  // 动态加载初始语言包
  importMessages(lang).then((messagesData) => {
    messages = { ...messages, ...{ [lang]: messagesData } };
    app.use(i18n);
  });
};

export { setupLanguage, setLanguage };
export type { I18nTypeEnum };