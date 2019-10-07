import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import Select from '.'

describe('Select', () => {
	test('renders correctly', () => {
		const tree = renderer.create(<Select onChange={() => {}}>
			<option value="1">Test</option>
		</Select>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
