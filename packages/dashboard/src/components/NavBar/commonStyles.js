import styled from '@emotion/styled'

import theme from '@deipnon/themes/lib'

export const Nav = styled('nav')`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1030;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 0;
	min-height: 64px;
	display:flex;
	border-bottom: 1px solid ${theme.styles.navBarBottomBorder};
`

export const NavbarBrand = styled('div')`
	box-sizing: border-box;
	background: ${theme.styles.navBarBrandBgColor};
  border-right: 1px solid ${theme.styles.navBarBrandBorderColor};
	transition: width 0.25s ease, background 0.25s ease;
	height: 64px;
	width: 240px;
	color: ${theme.styles.navBarBrandColor};
	font-size: 25px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;

`

export const NavbarMenuWrapper = styled('div')`
	background: ${theme.styles.navBarMenuBgColor};
	transition: width 0.25s ease;
	color: ${theme.styles.navBarMenuColor};
	box-shadow: 25px 0 30px rgba(28, 39, 60, 0.08);
	padding-left: 1.25rem;
	padding-right: 1.25rem;
	flex:1;
	height: 64px;
`
