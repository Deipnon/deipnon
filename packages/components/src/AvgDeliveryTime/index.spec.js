import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import AvgDeliveryTime from '.'

describe('AvgDeliveryTime', () => {
	test('renders correctly', () => {
		const fakeData =
			[{
				opensAt : {
					hours: 20,
					minutes: 30
				},
				closesAt : {
					hours: 23,
					minutes: 30
				}
			}]

		const tree = renderer.create(<AvgDeliveryTime workingHours={fakeData} estimatedDelivery="20dk" ></AvgDeliveryTime>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
