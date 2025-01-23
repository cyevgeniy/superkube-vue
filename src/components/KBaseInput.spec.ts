import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import KBaseInput from './KBaseInput.vue'

describe('KBaseInput component', () => {
    test('it renders', () => {
        const wrapper = mount(KBaseInput)

        expect(wrapper.find('[data-testid="baseInput"]').exists()).toBe(true)
    })

    test('it does not show a label when it is not provided', () => {
        const wrapper = mount(KBaseInput)

        expect(wrapper.find('[data-testid="inputLabel"]').exists()).toBe(false)
    })

    test('it shows a label when it is provided', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                label: 'test'
            }
        })

        expect(wrapper.find('[data-testid="inputLabel"]').text()).toBe('test')
    })

    test('it shows an asterics when required is true', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                label: 'test',
                required: true
            }
        })

        expect(wrapper.find('[data-testid="reqHint"]').text()).toBe('*')
    })

    test('it shows a top hint', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                label: 'test',
                hint: 'hint',
                hintPosition: 'top'
            }
        })

        expect(wrapper.find('[data-testid="topHint"]').text()).toBe('hint')
        expect(wrapper.find('[data-testid="bottomHint"]').exists()).toBe(false)
    })

    test('it shows a bottom hint', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                label: 'test',
                hint: 'hint',
                hintPosition: 'bottom'
            }
        })

        expect(wrapper.find('[data-testid="bottomHint"]').text()).toBe('hint')
        expect(wrapper.find('[data-testid="topHint"]').exists()).toBe(false)
    })

    test('it adds an error class in an error state (1)', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                label: 'test',
                hint: 'hint',
                hintPosition: 'top',
                state: 'error',
            }
        })

        expect(wrapper.find('[data-testid="topHint"]').classes()).includes('error')
    })

    test('it adds an error class in an error state (2)', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                hint: 'hint',
                hintPosition: 'bottom',
                state: 'error',
            }
        })

        expect(wrapper.find('[data-testid="bottomHint"]').classes()).includes('error')
    })

    test('it adds a success class in an success state (1)', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                label: 'test',
                hint: 'hint',
                hintPosition: 'top',
                state: 'success',
            }
        })

        expect(wrapper.find('[data-testid="topHint"]').classes()).includes('success')
    })

    test('it adds a success class in an success state (2)', () => {
        const wrapper = mount(KBaseInput, {
            props: {
                hint: 'hint',
                hintPosition: 'bottom',
                state: 'success',
            }
        })

        expect(wrapper.find('[data-testid="bottomHint"]').classes()).includes('success')
    })
})