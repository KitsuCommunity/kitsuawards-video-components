import { defineConfig } from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
	plugins: [
		motionCanvas({
			project: ['./src/nametag.ts', './src/transition.ts'],
		}),
	],
	resolve: {
		alias: {
			assets: './src/assets',
			scenes: './src/scenes',
			components: './src/components',
			src: './src',
		},
	},
});
