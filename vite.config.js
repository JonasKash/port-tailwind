import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/webhook': {
        target: 'https://teste.ugaritdigital.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/webhook/, '')
      }
    }
  }
}); 