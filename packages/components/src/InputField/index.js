// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import theme from '@deipnon/themes/lib'

type PropsType = {|
	hasError: boolean,
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void,
	placeholder: ?string,
	type: string,
	value: ?string
|}

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
	width: 100%;
`

const withError = ({ hasError }: PropsType) => {
	if (hasError) {
		return css`
			border-color: ${theme.styles.formErrorBorderColor};
		`
	}
}

const InputElement = styled('input')(
	inputBaseStyle,
	withError
)

const InputField = (props: PropsType) => <InputElement {...props} />

InputField.defaultProps = {
	type: 'text',
	hasError: false
}

export default InputField
