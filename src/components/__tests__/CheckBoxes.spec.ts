import CheckBoxes from '../CheckBoxes.vue'
import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('CheckBoxes', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = shallowMount(CheckBoxes)

    expect(wrapper.find('[data-testid="checkBoxesContainer"]').exists()).toBeTruthy()
  })
})
