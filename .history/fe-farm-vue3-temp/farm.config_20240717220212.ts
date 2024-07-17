// import { defineConfig, path } from '@farmfe/core';
import { defineConfig } from '@farmfe/core';
import path from 'path';
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

// 配置 Farm CSS Modules
interface FarmCssModulesConfig {
  // 配置哪些路径会被处理为 css modules，使用正则字符串
  // 默认为 `.module.css` 或者 `.module.scss` 或者 `.module.less`
  paths?: string[];
  // 配置生成的 css 类名，默认为 `[name]-[hash]`
  indentName?: string;
}

interface FarmCssPrefixer {
  sourceMAP?: boolean;
}

// 配置css的兼容性前缀
interface FarmCssPrefixer {
  targets?: string[] | string | BrowserTargetsRecord;
}

type BrowserTargetsRecord = Partial<
  Record<
    | "chrome"
    | "opera"
    | "edge"
    | "firefox"
    | "safari"
    | "ie"
    | "ios"
    | "android"
    | "node"
    | "electron",
    string
  >
> & { [key: string]: string };

// const basePath: string = pathBase();
// console.log('当前路径：', basePath);

export default defineConfig({
  // 配置vite插件
  vitePlugins: [vue()],
  // 使用js插件
  plugins: [
    "@farmfe/plugin-sass",
    // {
    //   sourceMap: false, // bool
    //   sourceMapIncludeSources: true, // bool
    //   alertAscii: true, // bool
    //   alertColor: true, // bool
    //   charset: true, // bool
    //   quietDeps: true, // bool
    //   verbose: false, // bool
    //   style: 'compressed' // output code style
    // }
  ],
  
  // 配置入口文件和打包输出文件路径
  compilation: {
    input: {
      index: './index.html',
    },
    output: {
      path: './dist',
      filename: 'assets/[name].[hash].[ext]',
      assetsFilename: 'static/[resourceName].[ext]',
      // 配置浏览器兼容性,即产物的执行环境，可以是 浏览器 或 节点。browser-legacy：将项目编译为ES5，例如IE9。 请注意，这可能会引入大量的填充，从而使生产规模更大。 确保您确实需要支持 IE9 等旧版浏览器。
      targetEnv: 'browser-legacy',
      // 资源 url 加载前缀。 例如 URL https://xxxx 或绝对路径 /xxx/。 例如配置：
      publicPath: process.env.NODE_ENV === 'production' ? 'https://www.dc.com/act/fe-farm-vue3-temp/' : '/src/'
    },
    // 配置目标执行环境
    script: {
      plugins: [],
      target: 'es2015',
    },
    presetEnv: true,
    resolve: {
      // 配置解析依赖时的后缀，例如解析 ./index 时，如果没有解析到，则会自动加上后缀解析，如尝试 ./index.tsx, ./index.css 等。
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      // 配置解析别名,alias 为前缀替换，对于上述例子 /@/pages 将会被替换为，/root/src/pages
      alias: {
        // "/@": path.join(process.cwd(), "src"),
        '@': path.resolve(__dirname, '../src'),
      },
    },
    css: {
      // 配置css预处理插件
      prefixer: {
        targets: ["last 2 versions", "Firefox ESR", "> 1%", "ie >= 11"],
      }
    }
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
      '/i18n': {
        target: 'localhost:9002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/i18n/, ''),
      },
    },
  },
  // 使用root和envDir指定项目根目录和加载环境变量的目录
  // root: path.join(process.cwd(), 'client'),
  envDir: './env',
});
