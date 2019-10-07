import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import Checkbox from '.'

const stories = storiesOf('Checkbox', module)
stories.addDecorator(withKnobs)

class CheckboxSample extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isChecked: false
		}
	}
	handleChange = (e) => {
		this.setState({isChecked:!this.state.isChecked})
	}
	render () {
		const {state:{label,isChecked},handleChange} = this
 		return <Checkbox label={label} onChange={handleChange} checked={isChecked} name="test" value="test"/>

	}
}

stories.add('default', () => <CheckboxSample />)
