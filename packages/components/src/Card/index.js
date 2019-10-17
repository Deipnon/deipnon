import React, { Component } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const cardContainerStyle = css`
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0,0,0,.125);
	border-radius: .25rem;
`
const cardBodyStyle = css`
	flex: 1 1 auto;
	padding: 1.25rem;
`
const cardTitleStyle = css`
	margin-bottom: .75rem;
`
const cardTextStyle = css`
	margin-top: 0;
	margin-bottom: 1rem;
`
const plusContainerStyle = css`position: absolute;
top: 0;
right: 0;
width: 40px;
height: 80px;`

const CardContainer = styled('div')(cardContainerStyle)
const CardBody = styled('div')(cardBodyStyle)
const CardTitle = styled('h5')(cardTitleStyle)
const CardText = styled('p')(cardTextStyle)
const PlusContainer = styled('div')(plusContainerStyle)
const PlusIcon = styled.h1(
	props => ({
		className: props.className
	})
)

export default class index extends Component {
	render () {
		return (
			<CardContainer>
				<PlusContainer>
					<PlusIcon className="glyphicon glyphicon-plus"></PlusIcon>
				</PlusContainer>
				<CardBody>
					<CardTitle>Bu bir baslik.</CardTitle>
					<CardText>Bu bir text Bu bir text Bu bir text.</CardText>
				</CardBody>
			</CardContainer>
		)
	}
}
