// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'http://daaps-j4ran.cloud/',
	integrations: [
		starlight({
			favicon: '/favicon.png',
			title: 'j4rannode',
			social: {
				twitter: 'https://twitter.com/0xAshcry',
				github: 'https://github.com/0xAshcry',
			},
			sidebar: [
				{ label: 'SERVICES', slug: 'services' },
				{
					label: 'STORY',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'services/story/installation' },
					],
				},
			],
		}),
	],
});
