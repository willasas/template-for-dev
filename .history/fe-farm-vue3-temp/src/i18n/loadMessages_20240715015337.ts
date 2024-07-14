// src/i18n/loadMessages.ts
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = join(fileURLToPath(import.meta.url), '..');

export async function loadMessages(i18nDir: string): Promise<Record<string, any>> {
  const messages: Record<string, any> = {};

  // 读取i18n目录下的所有子目录（语言目录）
  const dirs = await fs.readdir(i18nDir);
  for (const dir of dirs) {
    const langDirPath = join(i18nDir, dir); // 语言目录的路径
    const stat = await fs.stat(langDirPath);

    if (stat.isDirectory()) {
      // 读取每个语言目录下的语言文件
      const files = await fs.readdir(langDirPath);
      for (const file of files) {
        if (file.endsWith('.ts')) {
          const langCode = file.replace(/.ts$/, ''); // 去掉.ts后缀
          const fullPath = join(langDirPath, file);
          const langModule = await import(fullPath); // 动态导入语言文件
          messages[langCode] = langModule.default; // 将语言包添加到messages对象
        }
      }
    }
  }

  return messages;
}