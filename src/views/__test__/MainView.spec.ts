import MainView from '../MainView.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('MainView', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = mount(MainView)

    expect(wrapper.find('[data-testid="mainViewContainer"]').exists()).toBeTruthy()
  })
})
