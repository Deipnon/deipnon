import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import Checkbox from '.'

describe('Checkbox', () => {
	test('renders correctly', () => {
		const tree = renderer.create(<Checkbox onChange={() => {}}/>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
