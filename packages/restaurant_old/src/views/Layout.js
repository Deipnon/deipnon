// @flow
import * as React from 'react'
import styled from '@emotion/styled'

import SideMenu from '../components/SideMenu'

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
		<MainContent>
			{children}
		</MainContent>
	</Container>
</React.Fragment>)

export default Layout
