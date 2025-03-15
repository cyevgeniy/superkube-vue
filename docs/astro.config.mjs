// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://cyevgeniy.github.io',
  base: '/superkube-vue/docs',
  integrations: [
    starlight({
      title: 'Superkube Vue',
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
    }),
    vue(),
  ],
})
