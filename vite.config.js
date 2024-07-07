import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: './src',
  base: '/vite_project',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../build',
    emptyOutDir: true, // to clean build directory after iteration
    rollupOptions: {
      // сборщик который используется под капотом vite
      input: {
        // to switch the pages correctly
        main: './src/index.html',
        about: './src/about.html',
      },
    },
  },
  plugins: [
    ViteMinifyPlugin(),
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
