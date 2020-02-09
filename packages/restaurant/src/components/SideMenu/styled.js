// @flow
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Layout } from 'antd'

export const Container = styled(Layout.Sider)(({ theme }) => css`
	text-align: center;
	width: 80px;
	background-color: ${theme.colors.neutrals.n900};
	box-sizing: border-box;
`)
export const Nav = styled('ul')`
	list-style: none;
	padding: 0;
	margin-top: 60px;
`

export const NavItem = styled('li')(({ theme }) => css`
	margin-bottom: 16px;
	cursor: pointer;

	> a {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 16px 0;
		color: ${theme.colors.neutrals.n100};

		> svg {
			margin-bottom: 16px;
		}
	}

	> a.active {
		background-color: ${theme.colors.neutrals.n800};
	}

`)
