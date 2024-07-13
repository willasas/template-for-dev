import { createI18n } from 'vue-i18n';
import { LOCAL_KEY } from './local-key';

type I18nTypeEnum = typeof zh;
const messages: Record<string, I18nTypeEnum> = {zh, en};

const lang = localStorage.getItem('lang') || 'zh';

const i18n = createI18n({
  locale: 'en', // 设置默认语言
  globalInjection: true, // $t启用全局注册
  messages,
  legacy: false, // 使用 Vue 3 Composition API 必须设置为 false
});

const { setLocaleMessage, locale, t } = i18n.global;

const setLanguage = (lang: string) => {
  localStorage.setItem('lang', lang);
  setLocaleMessage(lang, messages[lang]);
  locale.value = lang;
};

export default i18n;