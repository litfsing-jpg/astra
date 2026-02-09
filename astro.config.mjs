import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://litfsing-jpg.github.io',
  base: '/astra/',
  integrations: [tailwind(), sitemap(), mdx()]
});
