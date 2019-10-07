// @flow

import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const buttonBaseStyles = css`
    display: inline-block;
    font-weight: ${theme.styles.formFontWeight};
    color: ${theme.styles.buttonDefaultColor};
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: ${theme.styles.formBorderWidth} solid transparent;
    padding: ${theme.styles.formPaddings};
    font-size: ${theme.styles.buttonFontSize};
    line-height: ${theme.styles.formLineHeight};
    border-radius: ${theme.styles.formBorderRadius};
    cursor: pointer;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const buttonColors = ({ color }) => {
    if (color === 'primary') {
        return css`
        color: ${theme.styles.buttonPrimaryColor};
        background-color: ${theme.styles.buttonPrimaryBg};
        border-color: ${theme.styles.buttonPrimaryBorderColor};
    `
    }
    if (color === 'secondary') {
        return css`
        color: ${theme.styles.buttonSecondaryColor};
        background-color: ${theme.styles.buttonSecondaryBg};
        border-color: ${theme.styles.buttonSecondaryBorderColor};
    `
    }
}

const withBlock = ({ block }) => block && css`
    width: 100%
`

const ButtonElement = styled.button`
    ${buttonBaseStyles}
    ${buttonColors}
    ${withBlock}
`
const props = {
    children: Element
}

type PropsType = {
    children: ReactNode
}

const Button = (props: PropsType) => <ButtonElement {...props}>{props.children}</ButtonElement>

export default Button 
