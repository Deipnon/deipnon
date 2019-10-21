import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import FavoriteButton from '.'

const stories = storiesOf('FavoriteButton', module)
stories.addDecorator(withKnobs)

class FavoriteButtonSample extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            restorantId: '2',
            isSelected: false
        }
    }

    handleClickButton = () => {
        console.log('click me', this.state.restorantId)
        this.setState({
            isSelected: !this.state.isSelected
        })
    }

    render () {
        return (
            <FavoriteButton isSelected={this.state.isSelected} onClick={this.handleClickButton}/>
        )
    }
}

stories.add('default', () => <FavoriteButtonSample />)