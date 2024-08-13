import RadioCard from '../RadioCard.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('RadioCard', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = shallowMount(RadioCard)

    expect(wrapper.find('[data-testid="radioCardContainer"]').exists()).toBeTruthy()
  })
  it('propsが正しく渡される', async () => {
    const wrapper = shallowMount(RadioCard)

    await wrapper.setProps({
      title: '総人口',
      content: 'total population',
      name: 'display',
      value: 'total',
      default: true
    })

    expect(wrapper.vm.title).toBe('総人口')
    expect(wrapper.vm.content).toBe('total population')
    expect(wrapper.vm.name).toBe('display')
    expect(wrapper.vm.value).toBe('total')
    expect(wrapper.vm.default).toBe(true)
  })
})
