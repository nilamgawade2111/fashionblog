import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['fashionblog.framework.autopath.ai', 'fashionblog.localhost', 'localhost']
  }
});


