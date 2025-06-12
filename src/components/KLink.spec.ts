import { mount, config } from '@vue/test-utils'
import { describe, expect, it, beforeAll } from 'vitest'
import { createRouter, createMemoryHistory, RouterLink } from 'vue-router'
import KLink from './KLink.vue'

function setupRouter(): void {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        component: { render: () => null },
      },
    ],
  })

  config.global.plugins.push(router)
}

beforeAll(() => setupRouter())

describe('KLink component', () => {
  it('renders as "span" when href is not provided"', () => {
    const wrapper = mount(KLink)

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders as "router-link" when href is not external"', () => {
    const wrapper = mount(KLink, {
      props: {
        href: '/about',
      },
    })

    expect(wrapper.findComponent(RouterLink).exists()).toBe(true)
  })

  it('renders as "a" when href is external"', () => {
    let link = 'http://example.com'
    const wrapper = mount(KLink, {
      props: {
        href: link,
      },
    })

    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.get('a').attributes('target')).toBe('_blank')
    expect(wrapper.get('a').attributes('href')).toBe(link)
  })
})
