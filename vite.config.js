import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$typings: resolve(__dirname, './src/typings'),
			$utils: resolve(__dirname, './src/utils'),
			$: resolve(__dirname, './src')
		}
	}
};

export default config;
