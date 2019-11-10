import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import InfoButton from '.'

const stories = storiesOf('InfoButton', module)
stories.addDecorator(withKnobs)

class InfoButtonSample extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            propName: 'Default'
        }
    }

    render () {
        return (
            <InfoButton/>
        )
    }
}

stories.add('default', () => <InfoButtonSample />)