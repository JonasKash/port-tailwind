import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'],
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'lucide-react': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
}); 