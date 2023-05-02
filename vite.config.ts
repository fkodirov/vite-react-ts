/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    copy({
      targets: [{ src: 'assets/*', dest: 'dist/public' }],
    }),
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],

  server: {
    open: '/',
  },

  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    coverage: {
      include: ['src/**/*'],
      exclude: ['**/*/@(index|config).@(tsx|ts)', '**/*/*.@(icon|asset|d|test).@(tsx|ts)'],
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
});
