// @flow
import * as React from 'react';
import { Layout } from 'antd';

import SideMenu from '../components/SideMenu'
import Header from '../components/Header'

// const Layout = ({ children }: $FlowFixMe) => (<React.Fragment>
// 	<Container>
// 		<SideMenu />
// 		<div style={{ flex: '1'}}>
// 			<Header />
// 			<MainContent>
// 				{children}
// 			</MainContent>
// 		</div>
// 	</Container>
// </React.Fragment>)

// export default Layout

export default ({ children }) => (
	<Layout style={{ height: '100vh' }}>
			<SideMenu/>
		<Layout>
			<Header />
			<Layout.Content style={{padding: '16px'}}>
				{children}
			</Layout.Content>
		</Layout>
	</Layout>
);
