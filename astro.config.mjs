import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
  site: 'https://alexandrtovmach.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },
  output: 'static',
  build: {
    assets: 'assets'
  }
});
