import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: 'src/index.jsx', // entry point of your app
      name: 'SolidApp',        // global function name
      fileName: () => 'solid-app.js',
      formats: ['iife']        // <--- Important
    }
  },
});
