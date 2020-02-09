// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { withTheme } from 'emotion-theming'
import { FaCashRegister, FaMortarPestle, FaReadme, FaReceipt, FaCog } from 'react-icons/fa'

import { Nav, NavItem, Container } from './styled'

const SideMenu = (props) => {
	return (<Container collapsed={true}>
		<Nav>
			<NavItem>
				<NavLink exact to="/" >
					<FaCashRegister size={30} />
					Home
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/orders" >
					<FaReceipt size={30} />
					Orders
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/menu" >
					<FaReadme size={30} />
					Menu
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/kitchen" >
					<FaMortarPestle size={30} />
					Kitchen
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/settings/restaurant" >
					<FaCog size={30} />
					Settings
				</NavLink>
			</NavItem>
		</Nav>
	</Container>)
}

export default withTheme(SideMenu)
