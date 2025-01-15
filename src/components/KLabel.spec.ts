import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest' 
import KLabel from './KLabel.vue'

describe('KLabel component', () => {
    test('It shows label', () => {
        const wrapper = mount(KLabel, {
            props: {
                label: 'test',
            }
        })

        expect(wrapper.find('[data-testid="label"]').text()).toBe('test')
    })

    test('close is not visible by default', () => {
        const wrapper = mount(KLabel, {
            props: {
                label: 'test',
            }
        })

        expect(wrapper.find('[data-testid="close"]').exists()).toBe(false)
    })

    test('close works', async () => {
        const wrapper = mount(KLabel, {
            props: {
                label: 'test',
                withClose: true
            }
        })

        wrapper.find('[data-testid="close"]').trigger('click')

        expect(wrapper.emitted('close')?.length).toBe(1)
    })
})