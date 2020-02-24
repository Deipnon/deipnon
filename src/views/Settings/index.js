// @flow
import React from 'react'
import { Tabs, Card, Typography } from 'antd'

import Restaurant from './Restaurant'
import WorkingHours from './WorkingHours'
import DeliverySettings from './DeliverySettings'
import CarryoutSettings from './CarryoutSettings'

const { TabPane } = Tabs
const { Title } = Typography

const Settings = () => {
	return (<React.Fragment>
    <Title className="page-title"level={3}>Settings</Title>
    <Card style={{ marginBottom: "20px"}}>
		<Tabs size="large">
			<TabPane tab="Restaurant" key="1">
				<Restaurant />
			</TabPane>
			<TabPane tab="Hours of Operation" key="2">
				<WorkingHours />
			</TabPane>
			<TabPane tab="Delivery Settings" key="3">
				<DeliverySettings />
			</TabPane>
			<TabPane tab="Carryout Settings" key="4">
				<CarryoutSettings />
			</TabPane>
		</Tabs>		
	</Card>
  </React.Fragment>)
}

export default Settings