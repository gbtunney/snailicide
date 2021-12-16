import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import {cleanIntegerType} from '@/scripts/_type'

describe('HelloWorld.vue', () => {
  it('renders props.msg when pkklkassed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

