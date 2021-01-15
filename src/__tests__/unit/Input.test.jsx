
import { shallow } from 'enzyme';
import InputComponents from '../../Components/inputComponent'


describe('Rendering', () => {
  it('Should not render', () => {
      const wrapper = shallow(<InputComponents/>)
      expect(wrapper).toHaveLength(0)
  })
  it('Should render', () => {
    const wrapper = shallow(<InputComponents/>)
      expect(wrapper).toHaveLength(1)
  })
  it('Should not have input', () => {
    const wrapper = shallow(<InputComponents/>)
    const input = wrapper.find('#textChangerr')
    expect(input).toBe(true)
  })
  it('Should  have input', () => {
    const wrapper = shallow(<InputComponents/>)
    const input = wrapper.find('#textChanger').exists()
    expect(input).toBe(true)
  })
})