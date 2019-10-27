// @flow

import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const buttonBaseStyles = css`
    display: inline-block;
    font-weight: ${theme.styles.buttonFontWeight};
    color: ${theme.styles.buttonDefaultColor};
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: ${theme.styles.buttonBorderWidth} solid transparent;
    padding: ${theme.styles.buttonPaddings};
    font-size: ${theme.styles.buttonFontSize};
    line-height: ${theme.styles.buttonLineHeight};
    cursor: pointer;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const buttonColors = ({ color }) => {
	const colorLabel = color === 'primary' ? 'Primary' : 'Secondary'

	return css`
        color: ${theme.styles[`button${colorLabel}Color`]};
        background-color: ${theme.styles[`button${colorLabel}Bg`]};
        border-color: ${theme.styles[`button${colorLabel}BorderColor`]};
   `
}

const withBlock = ({ block }) => block && css`
    width: 100%
`

const ButtonElement = styled.button`
    ${buttonBaseStyles}
    ${buttonColors}
    ${withBlock}
`

type PropsType = {
    block: ?boolean,
    children: ReactNode,
    color: ?string
}

const Button = (props: PropsType) => <ButtonElement {...props}>{props.children}</ButtonElement>

export default Button
