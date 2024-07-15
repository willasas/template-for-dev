import { defineConfig } from 'vite';
import { path, resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/style.css";`
      }
    },
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 3,
          features: {
            'nesting-rules': true
          }
        }),
        autoprefixer(),
      ],
    },
  },
})
