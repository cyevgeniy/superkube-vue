import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Superkube-vue',
  description: 'A Vue component library based on Superkube CSS',
  base: '/superkube-vue/',
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/markdown-examples' },
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
          { text: 'KSwitch', link: '/KSwitch' },
          { text: 'KSelect', link: '/KSelect' },
          { text: 'KList', link: '/KList' },
          { text: 'KMenu', link: '/KMenu' },
          { text: 'KText', link: '/KText' },
          { text: 'KButton', link: '/KButton' },
          { text: 'KCard', link: '/KCard' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/cyevgeniy/superkube-vue' }],
  },
})
