// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { FaCashRegister, FaMortarPestle } from 'react-icons/fa'

// import NavBar from '../components/NavBar'
// import SideBar from '../components/SideBar'

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
		{/* <SideBar /> */}
		<div style={{
			textAlign: 'center',
			width: '60px',
			fontSize: '12px',
			color: '#FAFBFC',
			boxSizing: 'border-box',
			backgroundColor: '#B22828',
			'-webkit-box-shadow': '1px 0px 3px 0px rgba(153,150,153, 1)',
			'-moz-box-shadow': '1px 0px 3px 0px rgba(153,150,153,1)',
			'box-shadow': '1px 0px 3px 0px rgba(153,150,153,1)'
		}}>
			<div style={{marginTop: '30px'}}>
				<FaCashRegister size={30} />
				Home
			</div>
			<div style={{marginTop: '20px'}}>
				<FaMortarPestle size={30} />
				Menu
			</div>
		</div>
		<MainContent>
			{children}
		</MainContent>
	</Container>
</React.Fragment>)

export default Layout
