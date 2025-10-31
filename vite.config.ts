import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: set base when deploying to GitHub Pages under a subpath
  // e.g., https://<user>.github.io/<repo>/
  base: '/clothing-website-v2/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
