import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // Fallback for SPA routing
            fallback: 'index.html'
        }),
        // Prerender all pages by default
        prerender: {
            default: true
        }
    }
};

export default config;