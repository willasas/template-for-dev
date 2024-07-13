import { createI18n } from 'vue-i18n';
import zh from './zh/zh-CN';
import en from './en/en-US';
import { LOCAL_KEY } from './local-key';

type I18nTypeEnum = typeof zh;
const messages: Record<string, I18nTypeEnum> = {zh, en};

const lang = localStorage.getItem(LOCAL_KEY.LANGUAGE);

const i18n = createI18n({
  locale: lang || 'zh', // 设置默认语言
  globalInjection: true, // $t启用全局注册
  messages,
  legacy: false, // 使用 Vue 3 Composition API 必须设置为 false
});

const { setLocaleMessage, locale, t } = i18n.global;

/** @description 设置语言
 * @param index 语言类型索引
 */
const setLanguage = (index: 0 | 1 | 2) => {
  const langs = ["zh", "en"];
  const lang = langs[index];
  setLocaleMessage(lang, messages[lang]);
  locale.value = lang;
  localStorage.setItem(LOCAL_KEY.LANGUAGE, lang);
};

/** @description 挂载 */
const setupLanguage = (app: App) => {
  app.use(i18n);
};

export { setupLanguage, setLanguage, t };
export type { I18nTypeEnum };