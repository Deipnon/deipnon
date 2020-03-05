// @flow

import React from 'react'
import { Tabs } from 'antd'
import WorkingHoursEditor from './WorkingHoursEditor'

const { TabPane } = Tabs

const WorkingHours = (): React$Node => {

  return (<Tabs defaultActiveKey="1" size="large" tabPosition="left">
    <TabPane tab="Bussiness Hours" key="1">
      <WorkingHoursEditor hourType="BussinessHours" title="Bussiness Hours" />
    </TabPane>
    <TabPane tab="Carryout Hours" key="2">
      <WorkingHoursEditor hourType="CarryoutHours" title="Carryout Hours" />
    </TabPane>
    <TabPane tab="Delivery Hours" key="3">
      <WorkingHoursEditor hourType="DeliveryHours" title="Delivery Hours" />
    </TabPane>
  </Tabs>)
}

export default WorkingHours