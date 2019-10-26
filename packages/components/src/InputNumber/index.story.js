import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import InputNumber from '.'

const stories = storiesOf('InputNumber', module)
stories.addDecorator(withKnobs)

class InputNumberSample extends React.Component {
    handleOnChange = (theNewChangedValue) => {
        return true
    }

    render () {
        return (
            <InputNumber onValue={this.handleOnChange} min={0} start={0} max={10}/>
        )
    }
}

stories.add('default', () => <InputNumberSample />)