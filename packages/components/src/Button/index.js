// @flow

import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const buttonBaseStyles = css`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const buttonColors = ({ color }) => {
    if (color === 'primary') {
        return css`
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    `
    }
    if (color === 'secondary') {
        return css`
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
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

type PropsType = {
    children: ReactNode
}

const Button = (props: PropsType) => <ButtonElement {...props}>{props.children}</ButtonElement>

export default Button
