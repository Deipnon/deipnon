// @flow
import { NavLink as Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {
	MdDashboard,
	MdShoppingBasket,
	MdLocalLibrary,
	MdPeople,
	MdSettings
} from 'react-icons/md'

import theme from '@deipnon/themes/lib'

export const SideBarContainer = styled('div')`
	width: 240px;
	min-height: calc(100vh - 64px);
	padding: 0.6rem 1.25rem;
	transition: width 0.25s ease, background 0.25s ease;
	box-shadow: none;
	background: ${theme.styles.sideBarBgColor};
	border-right: 1px solid ${theme.styles.sideBarBorder};
	box-sizing: border-box;
`

export const Nav = styled('ul')`
	margin-top: 0;
	overflow: hidden;
	flex-wrap: nowrap;
	flex-direction: column;
	margin-bottom: 60px;
	display: flex;
	padding-left: 0;
	list-style: none;
	font-size: 0.875rem;
`

export const withActiveState = ({ active }: $FlowFixMe) => active && css`
	font-weight: 700;
`

export const NavItem = styled('li')`
	margin-top: 0;
	position: relative;
	color: ${theme.styles.sideBarLinkColor};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 30px;
		right: 0;
		border-top: 1px dashed ${theme.styles.sideBarLinkBorder};
	}

	&:hover {
		font-weight: 500;
	}

	&:first-child {
		&::before {
			border-top: none;
		}
	}

	${withActiveState}
`

export const NavLink = styled(Link)`
	color: inherit;
	display: flex;
	position: relative;
	align-items: center;
	white-space: nowrap;
	height: 2.5rem;
	padding: 0;
	cursor:pointer;
	text-decoration: none;
`

export const iconStyles = () => css`
	margin-right: .6rem;
`

export const DashboardIcon = styled(MdDashboard)(iconStyles)
export const OrdersIcon = styled(MdShoppingBasket)(iconStyles)
export const PeopleIcon = styled(MdPeople)(iconStyles)
export const MenuIcon = styled(MdLocalLibrary)(iconStyles)
export const SettingsIcon = styled(MdSettings)(iconStyles)

export const ICON_SIZE = 20
