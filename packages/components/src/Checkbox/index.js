// @flow

import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const checkboxInputStyle = css`
	box-sizing: border-box;
	padding: 0;
	position: absolute;
    margin-left: -1.25rem;
`
const checkboxFormStyle = css`
	position: relative;
	display: block;
	padding-left: 1.25rem;
`
const checkboxLabelStyle = css`
	margin-bottom: 0;
`

const CheckboxForm = styled('div')(checkboxFormStyle)
const CheckboxInputElement = styled('input')(checkboxInputStyle)
const CheckboxLabelElement = styled('label')(checkboxLabelStyle)

type PropsType = {|
	checked: ?boolean,
	children: React$Node,
	name?: string,
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void,
	value?: string
|}

export const CheckboxInput = (props: PropsType) => <CheckboxInputElement type="checkbox" {...props} />
export const CheckboxLabel = (props: PropsType) => <CheckboxLabelElement>{props.children}</CheckboxLabelElement>
export const Form = (props: PropsType) => <CheckboxForm>{props.children}</CheckboxForm>
