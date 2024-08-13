import HighChart from '../HighChart.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('HighChart', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = shallowMount(HighChart)

    expect(wrapper.find('[data-testid="highChartContainer"]').exists()).toBeTruthy()
  })
  it('propsが正しく渡される', async () => {
    const wrapper = shallowMount(HighChart)

    await wrapper.setProps({
      data: [
        {
          name: 'testName',
          info: {
            label: 'testLabel',
            data: []
          }
        }
      ]
    })

    expect(wrapper.vm.data[0].name).toBe('testName')
    expect(wrapper.vm.data[0].info.label).toBe('testLabel')
  })
})
