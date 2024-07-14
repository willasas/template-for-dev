// src/i18n/loadMessages.ts
import { languages } from '../components/SelectLang/local.ts'; // 使用相对路径或别名导入 languages 数组

export async function loadMessages(): Promise<Record<string, any>> {
  const messages: Record<string, any> = {};
console.log('languages', languages);
  for (const { code } of languages) {
    try {
      // 使用动态 import 来按需加载语言文件
      const langModule = await import(`../i18n/locales/${code}.ts`);
      console.log('langModule', langModule);
      messages[code] = langModule.default;
    } catch (error) {
      console.error(`Loading message file for ${code} failed:`, error);
    }
  }

  return messages;
}