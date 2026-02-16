import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://zdravolog.ru',
  base: '/',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/search'),
    }),
    mdx()
  ]
});
