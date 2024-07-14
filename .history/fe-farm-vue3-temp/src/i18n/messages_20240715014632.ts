// src/i18n/loadMessages.ts
import { promises as fsPromises } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = join(fileURLToPath(import.meta.url), './');

export async function loadMessages(dir: string): Promise<Record<string, any>> {
  const messages: Record<string, any> = {};
  const files = await fsPromises.readdir(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = await fsPromises.stat(filePath);

    if (stat.isDirectory()) {
      // 如果是目录，则递归调用自身
      const nestedMessages = await loadMessages(filePath);
      Object.assign(messages, nestedMessages);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      // 动态导入语言文件
      const module = await import(filePath);
      const langCode = file.match(/[^/\\]+(?=\.[jt]s)/)?.[0];
      if (langCode && module.default) {
        messages[langCode] = module.default;
      }
    }
  }

  return messages;
}