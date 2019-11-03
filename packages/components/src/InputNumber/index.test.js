import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import I from '.'

configure({ adapter: new Adapter() })

describe('InputNumber Component', () => {
 let wrapper: any

 beforeEach(() => {
  wrapper = shallow(<I/>)
 })

 it('should render component succesfully', () => {
  expect(wrapper.exists()).toEqual(true)
 })
})