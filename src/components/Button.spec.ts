import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest' 
import Button from './Button.vue'

describe('Button component', () => {
    test('It is rendered', () => {
        const wrapper = mount(Button)

        expect(wrapper.find('[data-testid="button"]').exists()).toBe(true)
    })

    test('it shows label', () => {
        const wrapper = mount(Button, {
            props: {
                label: 'label'
            }
        })

        expect(wrapper.find('[data-testid="button"]').text()).toBe('label')
    })

    test('it is rendered as link when as is "a"', () => {
        const href = 'https://example.com'

        const wrapper = mount(Button, {
            props: {
                label: 'label',
                as: 'a',
                href,
            }
        })

        expect(wrapper.find('[data-testid="button"]').element.tagName).toBe('A')
        expect(wrapper.find('[data-testid="button"]').attributes().href).toBe(href)
    })

    test('it emits click event', async () => {
        const wrapper = mount(Button)

        const btn = wrapper.find('[data-testid="button"]')
        await btn.trigger('click')

        expect(wrapper.emitted('click')?.length).toBe(1)
    })

    test('it does not emit click event if disabled', async () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            }
        })

        const btn = wrapper.find('[data-testid="button"]')
        await btn.trigger('click')

        expect(wrapper.emitted('click')).toBeUndefined()
    })

    test('it does not emit click event if loading is on', async () => {
        const wrapper = mount(Button, {
            props: {
                loading: true,
            }
        })

        const btn = wrapper.find('[data-testid="button"]')
        await btn.trigger('click')

        expect(wrapper.emitted('click')).toBeUndefined()
    })

    test('it shows spinner if loading is on', async () => {
        const wrapper = mount(Button, {
            props: {
                loading: true,
            }
        })

        expect(wrapper.find('[data-testid="button"] .spinner').exists()).toBe(true)
    })
})