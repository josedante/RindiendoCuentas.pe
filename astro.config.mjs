// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Tailwind CSS 4 uses the Vite plugin directly instead of the deprecated
// @astrojs/tailwind integration. This gives us access to TW4's CSS-first
// configuration model and the new oxide engine.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
