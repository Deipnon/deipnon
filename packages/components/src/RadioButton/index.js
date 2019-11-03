// @flow

import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '@deipnon/themes/lib'

const radioInputStyle = css`
	box-sizing: border-box;
	position: absolute;
    margin-left: -1rem;
`

const radioLabelStyle = css`
	margin-bottom: 0;
	margin-left: 1rem;
`
const RadioInputElement = styled('input')(radioInputStyle)
const RadioLabelElement = styled('label')(radioLabelStyle)

type PropsType = {|
	value: string | number,
	selectedValue?: string | number,
	name: string,
	checked: ?boolean,
	children: React$Node,
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void
|}

const Radio = (props: PropsType) => {
	return (
		<RadioLabelElement>
			<RadioInputElement type="radio" checked={props.checked} onChange={props.onChange} />
			{props.children}
		</RadioLabelElement>
	)
}

export default Radio
