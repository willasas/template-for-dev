import { createI18n } from 'vue-i18n';
import { LOCAL_KEY } from './local-key';
import en from './en-US';
import zh from './zh-CN';

type I18nMessages = typeof zh | typeof en;
type I18nTypeEnum = keyof I18nMessages;

const importMessages = async (langCode: I18nTypeEnum): Promise<I18nMessages> => {
  switch (langCode) {
    case 'en':
      return (await import('./en-US')).default;
    case 'zh':
      return zh;
    default:
      return zh;
  }
};

const messages: Record<I18nTypeEnum, I18nMessages> = {
  zh,
  en,
};

const lang = localStorage.getItem(LOCAL_KEY.LANGUAGE) || 'zh';

const i18n = createI18n({
  locale: lang as I18nTypeEnum,
  messages,
  globalInjection: true,
  legacy: false,
});

const setLanguage = async (langCode: I18nTypeEnum) => {
  const messagesData = await importMessages(langCode);
  i18n.global.setLocaleMessage(langCode, messagesData);
  i18n.global.locale.value = langCode;
  localStorage.setItem(LOCAL_KEY.LANGUAGE, langCode);
};

const setupLanguage = async (app) => {
  const initialMessages = await importMessages(lang);
  i18n.global.setLocaleMessage(lang, initialMessages);
  app.use(i18n);
};

export { setupLanguage, setLanguage };
export type { I18nTypeEnum };