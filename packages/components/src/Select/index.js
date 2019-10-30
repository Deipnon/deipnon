// @flow

import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '@deipnon/themes/lib'

const inputBaseStyle = css`
	display: block;
	padding: ${theme.styles.formPaddings};
	font-size: ${theme.styles.formFontSize};
	font-weight: ${theme.styles.formFontWeight};
	line-height: ${theme.styles.formLineHeight};
	color: ${theme.styles.formColor};
	background-color: ${theme.styles.formBgColor};
	background-clip: padding-box;
	border: ${theme.styles.formBorderWidth} solid ${theme.styles.formBorderColor};
	height: ${theme.styles.formHeight};
`
const withBlock = ({ block }) => {
	if (block) {
		return css`
			width: 100%;
		`
	}
}

const SelectElement = styled('select')(inputBaseStyle, withBlock)

type PropsType = {|
	block: ?boolean,
	children: React$Node,
	onChange: (e: SyntheticEvent<HTMLSelectElement>) => void,
	value: ?string
|}

const Select = (props: PropsType) => (<SelectElement {...props} >
	{props.children}
</SelectElement>)

Select.defaultProps = {
	block: false
}

export default Select
