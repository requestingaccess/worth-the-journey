import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 1. This keeps your custom domain working correctly
  base: '/',
  
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },

  // 2. This ensures the output goes where GitHub looks for it
  build: {
    outDir: 'dist',
  }
});
