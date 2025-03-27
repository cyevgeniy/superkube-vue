import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import KSwitch from './KSwitch.vue'

describe('KSwitch component', () => {
  test('it renders', () => {
    const wrapper = mount(KSwitch, {
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.find('[data-testid="toggle"]').exists()).toBe(true)
  })

  test('it respects initial modelValue', () => {
    const wrapper = mount(KSwitch, {
      props: {
        modelValue: true,
      },
    })

    const input = wrapper.get('input')

    expect(input.element.checked).toBe(true)
  })

  test('it emits update:modelValue', async () => {
    const wrapper = mount(KSwitch, {
      props: {
        modelValue: true,
      },
    })

    await wrapper.get('input').trigger('click')

    expect(wrapper.emitted('click')?.length).toBe(1)
  })

  test('it does not emit events when disabled', async () => {
    const wrapper = mount(KSwitch, {
      props: {
        modelValue: true,
        disabled: true,
      },
    })

    await wrapper.get('input').trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
