import { defineConfig, path } from '@farmfe/core';
import vue from '@vitejs/plugin-vue';
import farmPostcssPlugin from '@farmfe/js-plugin-postcss';

// const pathBase = () => {
//   if (process.env.NODE_ENV === 'production') {
//     // 生产环境静态资源路径
//     return '/';
//   } else {
//     // 开发环境静态资源路径
//     return './src/assets/';
//   }
// };

// const basePath: string = pathBase();
// console.log('当前路径：', basePath);

export default defineConfig({
  // 配置vite插件
  vitePlugins: [vue()],
  // 使用js插件
  plugins: ["@farmfe/plugin-sass", farmPostcssPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 配置入口文件和打包输出文件路径
  compilation: {
    input: {
      index: './index.html',
    },
    output: {
      path: './dist',
      filename: 'assets/[name].[hash].[ext]',
      assetsFilename: 'static/[resourceName].[ext]',
      // 配置浏览器兼容性
      targetEnv: 'browser-legacy'
    },
    // 配置目标执行环境
    script: {
      plugins: [],
      target: 'es2015',
    },
    presetEnv: true,
  },
  // 配置开发服务器
  server: {
    open: true,
    port: 9001,
    hmr: {
      // 配置Websocket的监听端口
      port: 9801,
      host: 'localhost',
    },
    // 配置代理服务器（基于koa-proxies实现）
    proxy: {
      '/api': {
        target: 'https://music-erkelost.vercel.app/banner',
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 使用root和envDir指定项目根目录和加载环境变量的目录
  // root: path.join(process.cwd(), 'client'),
  envDir: './env',
});
