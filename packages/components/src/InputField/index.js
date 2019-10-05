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
	padding: ${theme.styles.inputPaddings};
	font-size: ${theme.styles.inputFontSize};
	font-weight: ${theme.styles.inputFontWeight};
	line-height: ${theme.styles.inputLineHeight};
	color: ${theme.styles.inputColor};
	background-color: ${theme.styles.inputBgColor};
	background-clip: padding-box;
	border: ${theme.styles.inputBorderWidth} solid ${theme.styles.inputBorderColor};
	border-radius: ${theme.styles.inputBorderRadius};
`

const withError = ({ hasError }: PropsType) => {
	if (hasError) {
		return css`
			border-color: ${theme.styles.inputErrorBorderColor};
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
