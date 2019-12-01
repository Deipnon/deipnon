import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import AvgDeliveryTime from '.'

const stories = storiesOf('AvgDeliveryTime', module)
stories.addDecorator(withKnobs)

class AvgDeliveryTimeSample extends React.PureComponent {
	constructor (props) {
		super(props)
		this.state = {
			estimatedDelivery : "20dk",
			workingHours: [
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
				{
					opensAt : {
						hours: 20,
						minutes: 30
					},
					closesAt : {
						hours: 23,
						minutes: 30
					}
				},
			]
		}
	}

	render () {
		return (
			<AvgDeliveryTime workingHours={this.state.workingHours} estimatedDelivery={this.state.estimatedDelivery} />
		)
	}
}

stories.add('default', () => <AvgDeliveryTimeSample />)
