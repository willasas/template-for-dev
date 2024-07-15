import { createI18n } from 'vue-i18n';
import { loadMessages } from './loadMessages';

export async function createI18nInstance() {
  const messages = await loadMessages();
  const i18n = createI18n({
    locale: 'zh-CN', // 默认语言
    fallbackLocale: 'en-US', // 回退语言
    messages, // 动态加载语言文件
    globalInjection: true,
    legacy: false,
  });

  return i18n;
}