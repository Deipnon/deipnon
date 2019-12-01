// @flow

import * as React from 'react'
import { IoIosTime, IoMdTime } from 'react-icons/io'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import theme from '@deipnon/themes/lib'

const LabelStyle = css`
	margin-bottom: 0;
	margin-left: 1rem;
`
const LabelElement = styled('label')(LabelStyle)

const OpenIconStyle = css`
color: ${theme.styles.AvgDeliveryTimeColorOpen};
box-sizing: border-box;
position: absolute;
margin-left: -1rem;
`

const CloseIconStyle = css`
color: ${theme.styles.AvgDeliveryTimeColorClose};
box-sizing: border-box;
position: absolute;
margin-left: -1rem;
`

const OpenIcon = styled(IoMdTime)(OpenIconStyle)
const CloseIcon = styled(IoIosTime)(CloseIconStyle)


type PropsType = {|
	workingHours: React$Node,
	estimatedDelivery: string,
|}

const AvgDeliveryTime = (props: PropsType) => {
	const date = new Date();
	const time = date.getHours()
	const open = props.workingHours[date.getDay()].opensAt.hours
	const close = props.workingHours[date.getDay()].closesAt.hours

	if (open > time) {
		return <LabelElement><CloseIcon/><span>From </span>{open}</LabelElement>
	} else if (open < time && time < close) {
		return <LabelElement><OpenIcon/>{props.estimatedDelivery}</LabelElement>
	} else {
		return <LabelElement><CloseIcon/></LabelElement>
	}
}

export default AvgDeliveryTime
