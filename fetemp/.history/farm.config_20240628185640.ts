import { UserConfig, defineConfig } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import farmPostcssPlugin from '@farmfe/js-plugin-postcss';

function defineConfig(config: UserConfig): UserConfig{
  return config;
}

export default defineConfig({
  // 配置vite插件
  vitePlugins: [vue()],
  // 使用js插件
  plugins: ["@farmfe/plugin-sass", farmPostcssPlugin()],
  // 配置入口文件和打包输出文件路径
  compilation: {
    input: {
      index: './index.html',
    },
    output: {
      path: './dist',
    },
  },
  // 配置开发服务器
  server: {
    open: true,
    port: 9001,
    hmr: {
      // 配置Websocket的监听端口
      port: 9801,
      host: 'localhost',
    }
  }
});
