import { shallowMount , mount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

import styledElement from '@/components/ui/styledElement'

describe('styledElement', () => {
  it('renders css when passed', () => {
    const msg = 'new message'
    const wrapper = mount(styledElement, {
      propsData: { color:"#FF0000",
      bg_color: "#FFFF00"
        }
    })
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)

  //  expect(wrapper.contains('div')).toBe(true)
  //  expect(wrapper.text()).toMatch(msg)
  })
})
