// @flow
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Container = styled('div')(() => css`
	text-align: center;
	width: 80px;

	box-sizing: border-box;
`)
export const Nav = styled('ul')`
	list-style: none;
	padding: 0;
	margin-top: 60px;
`

export const NavItem = styled('li')(() => css`
	margin-bottom: 16px;
	cursor: pointer;

	> a {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
    	padding: 16px 0;

		> svg {
			margin-bottom: 16px;
		}
	}

	> a.active {
		
	}

`)
