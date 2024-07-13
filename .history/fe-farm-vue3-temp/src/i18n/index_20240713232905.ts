import { createI18n, loadLocaleMessages } from 'vue-i18n';
import { LOCAL_KEY } from './local-key';

// 动态加载语言文件的函数
const loadMessages = async (locale: string): Promise<void> => {
  const messages = await loadLocaleMessages(locale);
  i18n.global.setLocaleMessage(locale, messages[locale]);
};

const lang = localStorage.getItem(LOCAL_KEY.LANGUAGE) || 'zh-CN';

const i18n = createI18n({
  locale: lang, // 设置默认语言
  globalInjection: true, // $t启用全局注册
  messages,
  legacy: false, // 使用 Vue 3 Composition API 必须设置为 false
});

// 加载默认语言文件
loadMessages(lang).catch(console.error);

const { locale, t } = i18n.global;

/** @description 设置语言 */
const setLanguage = async (langCode: string) => {
  try {
    await loadMessages(langCode);
    locale.value = langCode;
    localStorage.setItem(LOCAL_KEY.LANGUAGE, langCode);
  } catch (error) {
    console.error('Failed to set language:', error);
  }
};

/** @description 挂载 */
const setupLanguage = (app: App) => {
  app.use(i18n);
};

export { setupLanguage, setLanguage, t };