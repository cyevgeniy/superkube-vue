// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'My Docs',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Guides',
                autogenerate: { directory: 'guides' },
            },
            {
                label: 'Components',
                autogenerate: { directory: 'components' },
            },
            
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
		}), vue()],
});