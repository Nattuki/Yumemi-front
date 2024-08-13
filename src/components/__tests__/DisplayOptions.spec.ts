import DisplayOptions from '../DisplayOptions.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('DisplayOptions', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = shallowMount(DisplayOptions)

    expect(wrapper.find('[data-testid="displayOptionsContainer"]').exists()).toBeTruthy()
  })
})
