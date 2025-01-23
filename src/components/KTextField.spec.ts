import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import KTextField from './KTextField.vue'

describe('KTextField component', () => {
    test('it renders', () => {
        const wrapper = mount(KTextField, {
            props: {
                modelValue: null,
            }
        })

        expect(wrapper.find('[data-testid="baseInput"] input').exists()).toBe(true)
    })

    test('it emits update:modelValue event', async () => {
        const wrapper = mount(KTextField, {
            props: {
                modelValue: null,
            }
        })

        const input = wrapper.find('[data-testid="baseInput"] input')
        await input.setValue('test')

        expect(wrapper.emitted('update:modelValue')?.[0].length).toBe(1)
        expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('test')
    })

    test('it emits blur event', async () => {
        const wrapper = mount(KTextField, {
            props: {
                modelValue: null,
            }
        })

        await wrapper.find('[data-testid="baseInput"] input').trigger('blur')

        expect(wrapper.emitted('blur')?.[0].length).toBe(1)
    })

    test('it emits focus event', async () => {
        const wrapper = mount(KTextField, {
            props: {
                modelValue: null,
            }
        })

        await wrapper.find('[data-testid="baseInput"] input').trigger('focus')

        expect(wrapper.emitted('focus')?.[0].length).toBe(1)
    })
})