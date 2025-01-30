import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest' 
import KMenu, { type MenuItem } from './KMenu.vue'

describe('KMenu component', () => {
    test('It shows label', () => {
        const wrapper = mount(KMenu)

        expect(wrapper.find('[data-testid="menu"]').exists()).toBe(true)
    })

    test('It shows items', () => {
        const wrapper = mount(KMenu, {
            props: {
                items: [
                    {
                        text: 'one',
                    }
                ]
            }
        })

        expect(wrapper.find('[data-testid="menu"] li').text()).toBe('one')
    })

    test('It emits click event (1)', async () => {
        const wrapper = mount(KMenu, {
            props: {
                items: [
                    {
                        text: 'one',
                    }
                ]
            }
        })

        await wrapper.get('[data-testid="menu-link"]').trigger('click')

        expect(wrapper.emitted('click')?.length).toBe(1)
    })

    test('It emits click event (2)', async () => {
        const wrapper = mount(KMenu, {
            props: {
                items: [
                    {
                        label: {
                            label: 'test',
                        },
                        text: 'one',
                    }
                ]
            }
        })

        await wrapper.get('[data-testid="menu-link"]').trigger('click')

        expect(wrapper.emitted('click')?.length).toBe(1)
    })

    test('It emits update:modelValue event(2)', async () => {
        const wrapper = mount(KMenu, {
            props: {
                modelValue: null,
                items: [
                    {
                        text: 'one',
                    }
                ]
            }
        })

        await wrapper.get('[data-testid="menu-link"]').trigger('click')

        expect(wrapper.emitted('update:modelValue')?.length).toBe(1)
    })

    test('It adds `active` class to selected item', async () => {
        const item: MenuItem = {
            text: 'one',
        }
        const wrapper = mount(KMenu, {
            props: {
                modelValue: item,
                items: [
                    item,    
                ]
            }
        })

        expect(wrapper.find('[data-testid="menu-link"] .active').exists()).toBe(true)

    })


})