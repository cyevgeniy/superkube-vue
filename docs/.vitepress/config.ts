import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Superkube-vue',
  description: 'A Vue component library based on Superkube CSS',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'KAlert', link: '/KAlert' },
          { text: 'KBreadcrumb', link: '/KBreadcrumb' },
          { text: 'KDivider', link: '/KDivider' },
          { text: 'KLabel', link: '/KLabel' },
          { text: 'KTextField', link: '/KTextField' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
