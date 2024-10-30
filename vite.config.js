// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Add this line
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@zegocloud/zego-uikit-prebuilt'],
        },
      },
    },
    chunkSizeWarningLimit: 4000,
  },
});
