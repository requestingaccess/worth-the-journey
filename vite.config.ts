import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      // 1. IMPORTANT: This ensures assets load correctly on your domain
      base: '/',
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // 2. IMPORTANT: Pass the API key safely to the browser
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      // 3. Ensure the build goes to the folder GitHub expects
      build: {
        outDir: 'dist',
      }
    };
});
