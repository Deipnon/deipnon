// @flow

import * as React from 'react'

import {
	SideBarContainer,
	Nav,
	NavItem,
	NavLink,
	DashboardIcon,
	OrdersIcon,
	PeopleIcon,
	MenuIcon,
	SettingsIcon,
	ICON_SIZE
} from './commonStyles'

const SideBar = () => (<SideBarContainer>
	<Nav>
		<NavItem active>
			<NavLink to="/">
				<DashboardIcon size={ICON_SIZE} />	Dashboard
			</NavLink>
		</NavItem>
		<NavItem>
			<NavLink to="/orders">
				<OrdersIcon size={ICON_SIZE} /> Orders
			</NavLink>
		</NavItem>
		<NavItem>
			<NavLink to="/users">
				<PeopleIcon size={ICON_SIZE}/> Users
			</NavLink>
		</NavItem>
		<NavItem>
			<NavLink to="/menu">
				<MenuIcon size={ICON_SIZE}/> Menu
			</NavLink>
		</NavItem>
		<NavItem>
			<NavLink to="/settings">
				<SettingsIcon size={ICON_SIZE}/> Settings
			</NavLink>
		</NavItem>
	</Nav>
</SideBarContainer>)

export default SideBar
