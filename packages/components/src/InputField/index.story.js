import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react'

import InputField from '.'

const stories = storiesOf('Input Field', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (

	<InputField
		hasError={boolean('Has Error', false)}
		placeholder={text('Placeholder', '')}
	/>

))
