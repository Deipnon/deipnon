import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import Radio from '.'

describe('Radio', () => {
	test('renders correctly', () => {
		const tree = renderer.create(<Radio checked="false" value="test" name="test">Radio Button</Radio>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
