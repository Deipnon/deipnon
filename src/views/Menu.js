// @flow
import * as React from 'react'
import { Typography, Card, Empty } from 'antd'

const { Title } = Typography

const Menu = () => {
	return (<React.Fragment>
		<Title className="page-title"level={3}>Restaurant Menu</Title>
    
    <Card title="Categories">
      <Empty />
    </Card>
	</React.Fragment>)
}


export default Menu
