import React from 'react'
import { storiesOf } from '@storybook/react'
import GridInitializer from './GridInitializer'

import Grid from '.'

const stories = storiesOf('Grid', module)

const GridStoryComponent = () => (<React.Fragment>
	<GridInitializer />
	<Grid fluid>
		<Grid.Row>
			<Grid.Col xs={12} lg={6}>
				Deneme 1
			</Grid.Col>
			<Grid.Col xs={12} lg={6}>
				Deneme 2
			</Grid.Col>
		</Grid.Row>
	</Grid>
</React.Fragment>)

stories.add('Default', () => <GridStoryComponent />)
