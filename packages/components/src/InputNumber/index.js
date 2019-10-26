// @flow

import React from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const inputNumberSpanStyle = css`
	color: ${theme.colors.azureRadiance};
	user-select: none;
`

const inputNumberLabelStyle = css`
color: #666;
cursor: pointer;
`
const inputNumberFormStyle = css`
	font-weight: 400;
	width: 75px;
	min-width: 75px;
	display: flex;
	justify-content: space-between;
	border-radius: 1px;
	border: 1px solid ${theme.colors.lightGrayishBlue};
	background-color: ${theme.colors.white};
	line-height: 20px;
	align-items: center;
`

const InputNumberForm = styled('div')(inputNumberFormStyle)
const InputNumberSpanElement = styled('span')(inputNumberSpanStyle)
const InputNumberButtonElementAdd = styled(IoIosAdd)(inputNumberLabelStyle)
const InputNumberButtonElementRemove = styled(IoIosRemove)(inputNumberLabelStyle)

type PropsType = {|
    start: number,
    min: number,
	max: number,
    onValue: (e: SyntheticEvent<HTMLInputElement>) => void
|}

class InputNumber extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			number: this.props.start
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { props: { onValue } } = this
		if(onValue) {
			this.props.onValue(this.state.number)
		}
	}

	handleClickPlusButton = () => {
		const { state:{ number }, props: { max } } = this
		let incrementNumber = number + 1
		if (number !== max) {
			this.setState({
				number: incrementNumber
			})
		}
	}

	handleClickMinusButton = () => {
		const { state: { number }, props: {min} } = this
		let decreaseNumber = number - 1
		if (number !== min) {
			this.setState({
				number : decreaseNumber
			})
		}
	}

	render() {
		return(
			<InputNumberForm>
				<InputNumberButtonElementRemove onClick={this.handleClickMinusButton}/>
				<InputNumberSpanElement>{this.state.number}</InputNumberSpanElement>
				<InputNumberButtonElementAdd onClick={this.handleClickPlusButton}/>
			</InputNumberForm>
		)
	}
}

InputNumber.defaultProps = {
	start: 0,
	min: 0,
	max:10
  }

export default InputNumber