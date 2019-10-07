import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import InputField from '.'

describe('InputField', () => {
	test('renders correctly', () => {
		const tree = renderer.create(<InputField placeholder='test' />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
