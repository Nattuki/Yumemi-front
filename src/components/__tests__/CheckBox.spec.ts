import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CheckBox from '../CheckBox.vue'

describe('CheckBox', () => {
  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = shallowMount(CheckBox, {
      props: {
        code: 1,
        name: '北海道'
      }
    })

    expect(wrapper.classes()).toContain('container')
    expect(wrapper.find('svg').exists()).toBeTruthy
  })

  it('emits機能が正しく動く', () => {
    const wrapper = shallowMount(CheckBox, {
      props: {
        code: 1,
        name: '北海道'
      }
    })

    wrapper.vm.$emit('check')
    wrapper.vm.$emit('uncheck')

    expect(wrapper.emitted().check).toBeTruthy()
    expect(wrapper.emitted().uncheck).toBeTruthy()
  })
})
