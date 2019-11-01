// @flow
import React, { useCallback, useState } from 'react'

// Components
import Card from '../Card'
import { Grid, InputField, Button } from '@deipnon/components/lib'

// Styled components
import { FormGroup, FormLabel } from './commonStyles'

// Types
import { type RestaurantType } from '@deipnon/utils/lib'

type PropsType = {|
	restaurant: RestaurantType,
	onFormSubmit: (RestaurantType) => void
|}

export default ({ restaurant, onFormSubmit }: PropsType) => {

	if (!restaurant) return null

	const [formState, setFormState] = useState({...restaurant});

	const onSubmit = useCallback(e => {
		e.preventDefault()

		// TODO: Notify user
		onFormSubmit(formState)
	}, [onFormSubmit, formState]);

	const onRestaurantChange = useCallback(e => {
		e.preventDefault()
		setFormState({ ...formState, [e.target.name] : e.target.value })
	}, [formState])

	const onAddressChange = useCallback(e => {
		e.preventDefault()
		setFormState({
			...formState,
			address: {
				...formState.address,
				[e.target.name]: e.target.value
			}
		})
	}, [formState])

	return (
		<Card title="Restaurant Details">
			<form onSubmit={onSubmit}>
				<FormGroup>
					<FormLabel>Name</FormLabel>
					<InputField name="name" value={formState.name} onChange={onRestaurantChange} />
				</FormGroup>
				<FormGroup>
					<FormLabel>Email</FormLabel>
					<InputField name="email" value={formState.email} onChange={onRestaurantChange} />
				</FormGroup>
				<FormGroup>
					<FormLabel>Phone</FormLabel>
					<InputField name="phone" value={formState.phone} onChange={onRestaurantChange} />
				</FormGroup>
				<Grid.Row>
					<Grid.Col xs={6}>
						<FormGroup>
							<FormLabel>Address</FormLabel>
							<InputField name="addressLine" value={formState.address.addressLine} onChange={onAddressChange} />
						</FormGroup>
					</Grid.Col>
					<Grid.Col xs={6}>
						<FormGroup>
							<FormLabel>Zip Code</FormLabel>
							<InputField name="zipCode" value={formState.address.zipCode} onChange={onAddressChange} />
						</FormGroup>
					</Grid.Col>
				</Grid.Row>
				<Grid.Row>
					<Grid.Col xs={6}>
						<FormGroup>
							<FormLabel>City</FormLabel>
							<InputField name="city" value={formState.address.city} onChange={onAddressChange} />
						</FormGroup>
					</Grid.Col>
					<Grid.Col xs={6}>
						<FormGroup>
							<FormLabel>State</FormLabel>
							<InputField name="state" value={formState.address.state} onChange={onAddressChange} />
						</FormGroup>
					</Grid.Col>
				</Grid.Row>
				<Button color="primary" type="submit">Save</Button>
			</form>
		</Card>
	)
}
