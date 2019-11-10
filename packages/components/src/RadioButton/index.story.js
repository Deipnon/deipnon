import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import Radio from '.'

const stories = storiesOf('Radio', module)
stories.addDecorator(withKnobs)

class RadioSample extends React.PureComponent {
	constructor (props) {
		super(props)
		this.state = {
			isChecked: false
		}
	}

	handleChange = (e) => {
		this.setState({ isChecked: true })
	}

	render () {
		const { state: { isChecked }, handleChange } = this
		return (
			<Radio onChange={handleChange} checked={isChecked}>Label</Radio>
		)
	}
}

stories.add('default', () => <RadioSample />)
