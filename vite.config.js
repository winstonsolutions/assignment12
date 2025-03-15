import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['@winstonsolutions/my-component-library'],
    preserveSymlinks: true,
  },
  optimizeDeps: {
    include: ['@winstonsolutions/my-component-library'],
  },
});
