/* eslint-disable import/no-extraneous-dependencies */
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import i18nPlugin from '@intlify/vite-plugin-vue-i18n';

export default defineConfig({
  envDir: resolve(__dirname, 'envs'),
  plugins: [
    vue(),
    eslintPlugin(),
    VitePWA(),
    chunkSplitPlugin(),
    i18nPlugin({
      include: resolve(__dirname, 'src', 'locales', '**'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
