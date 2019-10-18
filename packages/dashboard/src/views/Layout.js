// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

const Container = styled('div')`
	padding-top: 64px;
	display:flex;
	background-color: #fdfdfd;
`

const MainContent = styled('div')`
	flex: 1;
	padding: 16px;
`

const Layout = ({ children }: $FlowFixMe) => (<React.Fragment>
	<NavBar />
	<Container>
		<SideBar />
		<MainContent>
			{children}
		</MainContent>
	</Container>
</React.Fragment>)

export default Layout
