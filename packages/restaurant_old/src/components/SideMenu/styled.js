// @flow
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Container = styled('div')(({ theme }) => css`
	text-align: center;
	width: 80px;

	box-sizing: border-box;
	background-color: ${theme.colors.r700};
	-webkit-box-shadow: 1px 0px 3px 0px rgba(153,150,153, 1);
	-moz-box-shadow: 1px 0px 3px 0px rgba(153,150,153,1);
	box-shadow: 1px 0px 3px 0px rgba(153,150,153,1);
`)
export const Nav = styled('ul')`
	list-style: none;
	padding: 0;
	margin-top: 60px;
`

export const NavItem = styled('li')(({ theme }) => css`
	margin-bottom: ${theme.spacings.byte};
	cursor: pointer;

	> a {
		color: ${theme.colors.n100};
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
    padding: ${theme.spacings.byte} 0;

		> svg {
			margin-bottom: ${theme.spacings.byte};
		}
	}

	> a.active {
		background-color: ${theme.colors.r900};
	}

`)
