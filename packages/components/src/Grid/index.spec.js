import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import Grid from '.'
import GridInitializer from './GridInitializer'

describe('Grid', () => {
	test('renders correctly', () => {
		const tree = renderer.create(<React.Fragment>
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
		</React.Fragment>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
