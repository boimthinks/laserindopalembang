// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://laserindopalembang.com',
  prefetch: true,
  integrations: [sitemap(), mdx(), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});