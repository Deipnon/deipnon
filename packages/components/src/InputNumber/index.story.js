import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import InputNumber from '.'

const stories = storiesOf('InputNumber', module)
stories.addDecorator(withKnobs)

class InputNumberSample extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			value: 1,
			min: 0,
			max: 10
		}
	}

handleOnMinusClick = (value) => {
	this.setState({ value })
}

handleOnPlusClick = (value) => {
	this.setState({ value })
}

render () {
	return (
		<InputNumber
			onMinusChange={this.handleOnMinusClick}
			onPlusChange={this.handleOnPlusClick}
			value={this.state.value}
			min={this.state.min}
			max={this.state.max}
		/>
	)
}
}

stories.add('default', () => <InputNumberSample />)
