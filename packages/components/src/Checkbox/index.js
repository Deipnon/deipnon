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
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void
|}

const Checkbox = (props: PropsType) => {
	return (
		<CheckboxForm>
			<CheckboxLabelElement>
				<CheckboxInputElement type="checkbox" checked={props.checked} onChange={props.onChange} />
				{props.children}
			</CheckboxLabelElement>
		</CheckboxForm>
	)
}

export default Checkbox
