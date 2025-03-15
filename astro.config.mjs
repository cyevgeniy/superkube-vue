// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://cyevgeniy.github.io',
  integrations: [
    starlight({
      title: 'Superkube Vue',
      social: {
        github: 'https://github.com/cyevgeniy/superkube-vue',
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
    }),
    vue(),
  ],
})
