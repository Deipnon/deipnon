// @flow
import * as React from 'react'
import RestaurantCard from '../../components/RestaurantCard'
import Container from './Container'

import { Grid } from '@deipnon/components/lib'

import { type ChildrenPropsType as ContainerPropsType } from './Container'

const Settings = () => (<Container>
	{({ restaurant, onUpdateRestaurant }: ContainerPropsType) => (<Grid fluid>
		<Grid.Row>
			<Grid.Col xs={6}>
				<RestaurantCard restaurant={restaurant} onFormSubmit={onUpdateRestaurant} />
			</Grid.Col>
			<Grid.Col xs={6}>
				Working hours card here....
		</Grid.Col>
		</Grid.Row>
	</Grid>)}
</Container>)

export default Settings
