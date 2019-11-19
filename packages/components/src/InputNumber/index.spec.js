import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import InputNumber from '.'

describe('InputNumber', () => {
	test('renders correctly', () => {
		const test = renderer.create(<InputNumber onChange={()=>{}} min={0} max={5} value={1}/>).toJSON()
		expect(test).toMatchSnapshot();
	})
})
