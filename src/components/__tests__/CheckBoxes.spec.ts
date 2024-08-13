import CheckBoxes from '../CheckBoxes.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('CheckBoxes', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = mount(CheckBoxes)

    expect(wrapper.find('[data-testid="checkBoxesContainer"]').exists()).toBeTruthy()
  })
})
