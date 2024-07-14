// src/i18n/loadMessages.ts
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// const __dirname = join(fileURLToPath(import.meta.url), '..');

// // src/i18n/loadMessages.ts
export async function loadMessages(): Promise<Record<string, any>> {
  const messages: Record<string, any> = {};

  // 假设你的语言文件遵循 'lang-XX' 格式并且导出 default 对象
  const langCodes = ['en-US', 'zh-CN', 'ja-JP']; // 语言代码列表

  for (const langCode of langCodes) {
    try {
      const langModule = await import(`./${langCode}.ts`);
      messages[langCode] = langModule.default;
    } catch (error) {
      console.error(`Loading message file for ${langCode} failed:`, error);
    }
  }

  return messages;
}