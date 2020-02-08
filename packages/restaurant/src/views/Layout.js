// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import SideMenu from '../components/SideMenu'
import Header from '../components/Header'

const Container = styled('div')`
	display:flex;
	background-color: #FAFBFC;
	height: 100vh;
`

const MainContent = styled('div')`
	flex: 1;
	padding: 16px;
`


const Layout = ({ children }: $FlowFixMe) => (<React.Fragment>
	<Container>
		<SideMenu />
		<div style={{ flex: '1'}}>
			<Header />
			<MainContent>
				{children}
			</MainContent>
		</div>
	</Container>
</React.Fragment>)

export default Layout
