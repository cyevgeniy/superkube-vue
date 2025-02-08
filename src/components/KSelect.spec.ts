import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KSelect from './KSelect.vue'
import KBaseInput from './KBaseInput.vue'

describe('KSelect', () => {
  const defaultOptions = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 }
  ]

  const createWrapper = (props = {}) => {
    return mount(KSelect, {
      props: {
        modelValue: null,
        options: defaultOptions,
        ...props
      },
      global: {
        components: {
          KBaseInput
        }
      }
    })
  }

  it('renders properly', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('select').exists()).toBe(true)
  })

  it('renders options with correct labels', () => {
    const wrapper = createWrapper()
    const options = wrapper.findAll('option')
    expect(options[0].text()).toBe('Option 1')
    expect(options[1].text()).toBe('Option 2')
    expect(options[2].text()).toBe('Option 3')
  })

  it('emits update:modelValue when selection changes', async () => {
    const wrapper = createWrapper()
    await wrapper.find('select').setValue('1')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })

  it('emits change event when selection changes', async () => {
    const wrapper = createWrapper()
    await wrapper.find('select').setValue('1')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')?.[0]).toEqual([2])
  })

  it('renders empty option when allowEmpty is true', () => {
    const wrapper = createWrapper({
      allowEmpty: true,
      emptyLabel: 'Select an option'
    })
    const options = wrapper.findAll('option')
    expect(options).toHaveLength(4)
    expect(options[3].text()).toBe('Select an option')
  })

  it('applies disabled state correctly', () => {
    const wrapper = createWrapper({
      disabled: true
    })
    expect(wrapper.find('select').element.disabled).toBe(true)
  })

  it('applies size class correctly', () => {
    const wrapper = createWrapper({
      size: 'small'
    })
    expect(wrapper.find('select').classes()).toContain('small')
  })

  it('applies state class correctly', () => {
    const wrapper = createWrapper({
      state: 'error'
    })
    expect(wrapper.find('select').classes()).toContain('error')
  })

  it('applies rounded class when rounded prop is true', () => {
    const wrapper = createWrapper({
      rounded: true
    })
    expect(wrapper.find('select').classes()).toContain('round')
  })

  it('applies light class when light prop is true', () => {
    const wrapper = createWrapper({
      light: true
    })
    expect(wrapper.find('select').classes()).toContain('light')
  })

  it('handles disabled options correctly', () => {
    const optionsWithDisabled = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2, disabled: true },
      { label: 'Option 3', value: 3 }
    ]
    const wrapper = createWrapper({
      options: optionsWithDisabled
    })
    const options = wrapper.findAll('option')
    expect(options[1].element.disabled).toBe(true)
  })

  it('handles multiple selection when multiple prop is true', () => {
    const wrapper = createWrapper({
      multiple: true
    })
    expect(wrapper.find('select').element.multiple).toBe(true)
  })

  it('correctly sets selected option based on modelValue', () => {
    const wrapper = createWrapper({
      modelValue: 2
    })
    const options = wrapper.findAll('option')
    expect(options[1].element.selected).toBe(true)
  })
}) 