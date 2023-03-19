import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';
export default defineConfig({
  plugins: [
    copy({
      targets: [{ src: 'assets/*', dest: 'dist/public' }],
    }),
    react(),
  ],

  server: {
    open: '/',
  },
});
