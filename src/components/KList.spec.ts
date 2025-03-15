import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KList from './KList.vue'

describe('KList', () => {
  it('renders with string items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3']
    const wrapper = mount(KList, {
      props: { items },
    })

    expect(wrapper.find('[data-testid="list"]').exists()).toBe(true)
    const listItems = wrapper.findAll('[data-testid="list-item"]')
    expect(listItems).toHaveLength(3)
    expect(listItems[0].text()).toBe('Item 1')
  })

  it('renders with object items using', () => {
    const items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
    ]
    const wrapper = mount(KList, {
      props: {
        items,
        labelField: 'name',
      },
    })

    const listItems = wrapper.findAll('[data-testid="list-item"]')
    expect(listItems).toHaveLength(2)
    expect(listItems[0].text()).toBe('Item 1')
    expect(listItems[1].text()).toBe('Item 2')
  })

  // Mark Type Tests
  it.each(['unstyled', 'checkmark', 'dashed', 'numbered'] as const)(
    'applies correct markType class: %s',
    (markType) => {
      const wrapper = mount(KList, {
        props: {
          items: ['Item'],
          markType,
        },
      })

      expect(wrapper.find('[data-testid="list"]').classes()).toContain(markType)
    },
  )

  it('uses default labelField', () => {
    const items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
    ]
    const wrapper = mount(KList, {
      props: { items },
    })

    const listItems = wrapper.findAll('[data-testid="list-item"]')
    expect(listItems).toHaveLength(2)
    expect(listItems[0].text()).toBe('Item 1')
    expect(listItems[1].text()).toBe('Item 2')
  })

  it('handles missing labelField gracefully', () => {
    const items = [{ id: 1 }, { id: 2 }]
    const wrapper = mount(KList, {
      props: {
        items,
        labelField: 'nonexistent',
      },
    })

    const listItems = wrapper.findAll('[data-testid="list-item"]')
    expect(listItems).toHaveLength(2)
    // Should render empty or undefined gracefully
    expect(listItems[0].text()).toBe('')
  })
})
