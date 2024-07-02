import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
