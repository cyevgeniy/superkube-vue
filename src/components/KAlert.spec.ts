import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import KAlert from './KAlert.vue'

describe('KAlert component', () => {
  it('shows close icon if `close` is set', () => {
    const wrapper = mount(KAlert, {
      props: {
        close: true,
      }
    })

    expect(wrapper.find('[data-test="close"]').exists()).toBe(true)
  })

  it('does not show close icon by default', () => {
    const wrapper = mount(KAlert)

    expect(wrapper.find('[data-test="close"]').exists()).toBe(false)
  })

  it('emits "close" event', async () => {
    const wrapper = mount(KAlert, {
      props: {
        close: true,
      }
    })

    await wrapper.get('[data-test="close"]').trigger('click')

    expect(wrapper.emitted('close')?.length).toBe(1)
  })
})
