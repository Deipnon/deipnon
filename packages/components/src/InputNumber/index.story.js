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
            number: 0,
            min: 0,
            max: 10,
		}
	}

    handleClickPlusButton = () => {
        const incrementNumber = this.state.number + 1
        if (this.state.number !== this.state.max) {
            return onValueChange(incrementNumber)
        }
       }

       handleClickMinusButton = () => {
        const decreaseNumber = this.state.number - 1
        if (this.state.number !== this.state.min) {
          return onValueChange(decreaseNumber)
        }
       }

    render () {
        return (
                <InputNumber>
                </InputNumber>
        )
    }
}

stories.add('default', () => <InputNumberSample />)