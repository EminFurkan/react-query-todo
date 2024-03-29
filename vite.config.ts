import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@services': '/src/services',
      '@enums': '/src/enums',
      '@custom-types': '/src/custom-types',
      '@hooks': '/src/hooks',
    },
  },
});
