// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Las variables de entorno se cargarán automáticamente por Astro/Vite

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});