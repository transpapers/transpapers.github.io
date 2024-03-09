/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    deps: {
      optimizer: {
        web: {
          include: ['vitest-canvas-mock'],
        },
      },
    },
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      '**/.*/**',
    ],
    passWithNoTests: true,
    setupFiles: ['test/vitest-setup.ts'],
    threads: false,
  },
});
