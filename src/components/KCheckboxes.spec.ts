import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import KCheckboxes from './KCheckboxes.vue'

describe('KCheckboxes', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  // Helper function to get checkbox inputs
  const getCheckboxes = (wrapper: ReturnType<typeof mount>) => {
    return wrapper.findAll('input[type="checkbox"]')
  }

  // Helper function to get checkbox element with proper typing
  const getCheckboxElement = (checkbox: ReturnType<typeof getCheckboxes>[number]) => {
    return checkbox.element as HTMLInputElement
  }

  it('renders correctly with options', () => {
    const wrapper = mount(KCheckboxes, {
      props: { options },
    })

    expect(wrapper.findAll('label').length).toBe(3)
    expect(wrapper.text()).toContain('Option 1')
    expect(wrapper.text()).toContain('Option 2')
    expect(wrapper.text()).toContain('Option 3')
  })

  it('renders correctly with empty options', () => {
    const wrapper = mount(KCheckboxes, {
      props: { options: [] },
    })

    expect(wrapper.findAll('label').length).toBe(0)
  })

  it('handles initial selected values', () => {
    const wrapper = mount(KCheckboxes, {
      props: {
        options,
        modelValue: ['option1', 'option3'],
      },
    })

    const checkboxes = getCheckboxes(wrapper)
    expect(getCheckboxElement(checkboxes[0]).checked).toBe(true)
    expect(getCheckboxElement(checkboxes[1]).checked).toBe(false)
    expect(getCheckboxElement(checkboxes[2]).checked).toBe(true)
  })

  it('emits update:modelValue when a checkbox is selected', async () => {
    const wrapper = mount(KCheckboxes, {
      props: { options },
    })

    const checkboxes = getCheckboxes(wrapper)
    await checkboxes[0].setValue(true)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['option1']])
  })

  it('emits update:modelValue with correct values when multiple checkboxes are selected', async () => {
    const wrapper = mount(KCheckboxes, {
      props: { options },
    })

    // Select first checkbox
    const checkboxes = getCheckboxes(wrapper)
    await checkboxes[0].setValue(true)

    // Update the component with the new modelValue
    await wrapper.setProps({ modelValue: ['option1'] })

    // Select second checkbox
    await checkboxes[1].setValue(true)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    // First emission: ['option1']
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['option1']])
    // Second emission: ['option1', 'option2']
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([['option1', 'option2']])
  })

  it('deselects a checkbox when it is clicked again', async () => {
    const wrapper = mount(KCheckboxes, {
      props: {
        options,
        modelValue: ['option1'],
      },
    })

    const checkboxes = getCheckboxes(wrapper)
    await checkboxes[0].setValue(false)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[]])
  })

  it('disables all checkboxes when the component is disabled', () => {
    const wrapper = mount(KCheckboxes, {
      props: {
        options,
        disabled: true,
      },
    })

    const checkboxes = getCheckboxes(wrapper)
    checkboxes.forEach((checkbox) => {
      expect(getCheckboxElement(checkbox).disabled).toBe(true)
    })
  })

  it('disables specific checkboxes when individual options are disabled', () => {
    const optionsWithDisabled = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2', disabled: true },
      { label: 'Option 3', value: 'option3' },
    ]

    const wrapper = mount(KCheckboxes, {
      props: { options: optionsWithDisabled },
    })

    const checkboxes = getCheckboxes(wrapper)
    expect(getCheckboxElement(checkboxes[0]).disabled).toBe(false)
    expect(getCheckboxElement(checkboxes[1]).disabled).toBe(true)
    expect(getCheckboxElement(checkboxes[2]).disabled).toBe(false)
  })

  it('applies size classes to checkboxes', () => {
    const wrapper = mount(KCheckboxes, {
      props: {
        options,
        size: 'large',
      },
    })

    const checkboxes = wrapper.findAll('label')
    checkboxes.forEach((checkbox) => {
      expect(checkbox.classes()).toContain('large')
    })
  })

  it('handles undefined modelValue', () => {
    const wrapper = mount(KCheckboxes, {
      props: { options },
    })

    const checkboxes = getCheckboxes(wrapper)
    checkboxes.forEach((checkbox) => {
      expect(getCheckboxElement(checkbox).checked).toBe(false)
    })
  })
})
