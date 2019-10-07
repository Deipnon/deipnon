import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import Select from '.'

const stories = storiesOf('Select', module)
stories.addDecorator(withKnobs)

class SelectListSample extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			selectedValue: 2,
			selectListItems: [{
				text: 'Item 1',
				value: 1
			}, {
				text: 'Item 2',
				value: 2
			}]
		}
	}

	onSelectChange = (e) => {
		const newValue = e.currentTarget.value
		this.setState({
			selectedValue: newValue
		})
	}

	render () {
		const { selectListItems, selectedValue } = this.state
		return (
			<Select value={selectedValue} onChange={this.onSelectChange} block={boolean('Block', true)}>
				{selectListItems.map((item, index) => (
					<option key={index} value={item.value}>{item.text}</option>
				))}
			</Select>
		)
	}
}

stories.add('default', () => <SelectListSample />)
