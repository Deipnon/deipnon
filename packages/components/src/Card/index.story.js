import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import Card from '.'

const stories = storiesOf('Card', module)
stories.addDecorator(withKnobs)

class CardSample extends React.Component {
	constructor (props) {
		super(props)

		this.state = {

		}
	}

	render () {
		return (
			<Card/>
		)
	}
}

stories.add('default', () => <CardSample />)
