import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alexandrtovmach.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },
  output: 'static',
  build: {
    assets: 'assets'
  }
});
