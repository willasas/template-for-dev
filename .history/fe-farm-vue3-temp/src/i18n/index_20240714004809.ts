// src/i18n/index.ts
import { createI18n, I18nOptions } from 'vue-i18n';
import { LOCAL_KEY } from './local-key';

// 动态导入语言包的函数
async function loadLanguageMessages(lang: string) {
  switch (lang) {
    case 'en-US':
      return import('./en-US.ts').then((m) => m.default);
    case 'zh-CN':
    default:
      return import('./zh-CN.ts').then((m) => m.default);
  }
}

// 创建 i18n 配置的工厂函数
export async function createI18nInstance(locale: string = 'zh-CN') {
  const i18nOptions: I18nOptions = {
    locale,
    globalInjection: true,
    legacy: false,
  };

  // 根据初始语言加载语言包
  const messages = await loadLanguageMessages(locale);
  i18nOptions.messages = { [locale]: messages };

  return createI18n(i18nOptions);
}

// 用于应用程序的 setupLanguage 函数
export async function setupLanguage(app, locale = 'zh-CN') {
  const i18n = await createI18nInstance(locale);
  app.use(i18n);
}