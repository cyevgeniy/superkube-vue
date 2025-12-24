import { describe, it, expect } from 'vitest'
import KCheckbox from './KCheckbox.vue'
import { mount } from '@vue/test-utils'

describe('KCheckbox', () => {
  it('mounts', () => {
    const wrapper = mount(KCheckbox)

    expect(wrapper.find('[data-test="checkboxInput"]').exists()).toBe(true)
  })

  it('renders a label', () => {
    const wrapper = mount(KCheckbox, {
      props: {
        label: 'label13',
      },
    })

    const label = wrapper.get('[data-test="checkboxLabel"]')

    expect(label.text()).toBe('label13')
  })

  it('emits update:modelValue', async () => {
    const wrapper = mount(KCheckbox)

    const checkbox = wrapper.get('[data-test="checkboxInput"]')

    await checkbox.setValue(true)

    expect(wrapper.emitted('update:modelValue')?.[0].length).toBe(1)
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe(true)
  })

  it('it is not checked by default', async () => {
    const wrapper = mount(KCheckbox)

    const checkbox = wrapper.get('[data-test="checkboxInput"]')

    expect(checkbox.element.checked).toBe(false)
  })
})
