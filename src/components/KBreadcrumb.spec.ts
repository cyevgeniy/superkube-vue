import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KBreadcrumb from './KBreadcrumb.vue'
import KLink from './KLink.vue'

describe('KBreadcrumb', () => {
  const defaultItems = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'Details' }
  ]

  const createWrapper = (props = {}) => {
    return mount(KBreadcrumb, {
      props: {
        items: defaultItems,
        ...props
      },
      global: {
        components: {
          KLink
        }
      }
    })
  }

  it('renders properly', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.find('.breadcrumb-list').exists()).toBe(true)
    expect(wrapper.findAll('.breadcrumb-item')).toHaveLength(3)
  })

  it('renders all items with correct text', () => {
    const wrapper = createWrapper()
    const items = wrapper.findAll('.breadcrumb-item')
    expect(items[0].text()).toContain('Home')
    expect(items[1].text()).toContain('Products')
    expect(items[2].text()).toContain('Details')
  })

  it('marks last item as active if highlightLast prop is true', () => {
    const wrapper = createWrapper({ highlightLast: true })
    const items = wrapper.findAll('.breadcrumb-item')
    expect(items[2].classes()).toContain('active')
    expect(items[0].classes()).not.toContain('active')
  })

  it('applies light theme when light prop is true', () => {
    const wrapper = createWrapper({
      light: true
    })
    expect(wrapper.find('.breadcrumb').classes()).toContain('light')
  })

  it('renders without items', () => {
    const wrapper = createWrapper({ items: [] })
    expect(wrapper.find('.breadcrumb').exists()).toBe(true)
    expect(wrapper.findAll('.breadcrumb-item')).toHaveLength(0)
  })

  it('handles items without href', () => {
    const items = [
      { text: 'Home' },
      { text: 'Products' }
    ]
    const wrapper = createWrapper({ items })
    const links = wrapper.findAll('.breadcrumb-link')
    expect(links[0].attributes('href')).toBeUndefined()
    expect(links[1].attributes('href')).toBeUndefined()
  })
}) 