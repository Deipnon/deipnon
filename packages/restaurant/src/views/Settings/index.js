// @flow
import React from 'react'
import { Switch, Route, useParams , withRouter} from "react-router-dom";

import Restaurant from './Restaurant'
import WorkingHours from './WorkingHours'
import DeliverySettings from './DeliverySettings'
import CarryoutSettings from './CarryoutSettings'

const tabs = [
	{key: 'restaurant', title: "Restaurant"},
	{key: 'working-hours', title: "Working Hours"},
	{key: 'delivery-settings', title: "Delivery Settings"},
	{key: 'carryout-settings', title: "Carryout Settings"}
]

const Settings = ({ history }) => {

	let { id } = useParams();

	return (<>
		
		<Switch>
			<Route path="/settings/restaurant" component={Restaurant} />	
			<Route path="/settings/working-hours" component={WorkingHours} />
			<Route path="/settings/delivery-settings" component={DeliverySettings} />
			<Route path="/settings/carryout-settings" component={CarryoutSettings} />
		</Switch>
		
	</>)
}

export default withRouter(Settings)