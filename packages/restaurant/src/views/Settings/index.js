// @flow
import React from 'react'
import { Tabs, Card } from 'antd'

import Restaurant from './Restaurant'
import WorkingHours from './WorkingHours'
import DeliverySettings from './DeliverySettings'
import CarryoutSettings from './CarryoutSettings'

const { TabPane } = Tabs

const Settings = () => {
	return (<Card style={{ height: '100%'}}>
		<Tabs defaultActiveKey="1" size="large">
			<TabPane tab="Restaurant" key="1">
				<Restaurant />
			</TabPane>
			<TabPane tab="Working Hours" key="2">
				<WorkingHours />
			</TabPane>
			<TabPane tab="Delivery Settings" key="3">
				<DeliverySettings />
			</TabPane>
			<TabPane tab="Carryout Settings" key="4">
				<CarryoutSettings />
			</TabPane>
		</Tabs>		
	</Card>)
}

export default Settings