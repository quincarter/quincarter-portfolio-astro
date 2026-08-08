import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

import { remarkCallouts } from './src/plugins/remark-callouts.mjs';

// https://astro.build/config
export default defineConfig({
	// base: '.', // Set a path prefix.
	site: 'https://quincarter-portfolio.netlify.app',
	// Use to generate your sitemap and canonical URLs in your final build.
	trailingSlash: 'always',
	// Use to always append '/' at end of url
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'monokai',
		},
		remarkPlugins: [remarkCallouts],
	},
	vite: {
		plugins: [tailwind()],
	},
	integrations: [react(), sitemap(), robotsTxt(), mdx()],
});
