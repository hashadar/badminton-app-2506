// import adapter from '@sveltejs/adapter-auto'; // Comment out or remove
import adapter from '@sveltejs/adapter-node';    // Add this
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // Default output directory is 'build'.
            // You can specify 'out: "build"' if you want to be explicit
        })
    }
};
export default config;