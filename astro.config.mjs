// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://trayko.co',
  // Usar la misma barra final en URLs canónicas, sitemap y enlaces internos.
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      // La página de eliminación se excluye del sitemap, pero permanece
      // rastreable para que los buscadores puedan leer su directiva noindex.
      filter: (page) => !page.includes('/eliminar-cuenta'),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
