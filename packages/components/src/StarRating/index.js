// @flow

import * as React from 'react'
import styled from '@emotion/styled'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const withHover = css`
	:hover{
        color: ${theme.styles.ratingHoverColor};
    }
`

const starIconBaseStyle = (color) => css`
	width: 24px;
	height: 24px;
	cursor: pointer;
	color: ${color};
`

const StarFillIcon = styled(IoIosStar)`
	${starIconBaseStyle(theme.styles.ratingFillColor)}
	${withHover}
`
const StarEmptyIcon = styled(IoIosStarOutline)`
	${starIconBaseStyle(theme.styles.ratingEmptyColor)}
	${withHover}
`
const StarDisabledIcon = styled(IoIosStar)`
	${starIconBaseStyle(theme.styles.ratingDisabledColor)}
`
const StarEmptyDisabledIcon = styled(IoIosStarOutline)`
	${starIconBaseStyle(theme.styles.ratingEmptyColor)}
`

type PropsType = {
    disabled: boolean,
    max: number,
    onClick: (number) => void,
    value: number
}

const StartIcon = (props) => {
	const { disabled, filled } = props
	const newProps = {
		onClick: props.onClick,
		id: props.id
	}

	if (disabled && filled) {
		return <StarDisabledIcon {...newProps} />
	} else if (disabled && !filled) {
		return <StarEmptyDisabledIcon {...newProps} />
	} else if (!disabled && filled) {
		return <StarFillIcon {...newProps} />
	} else if (!disabled && !filled) {
		return <StarEmptyIcon {...newProps} />
	} else {
		return null
	}
}

const Rating = (props: PropsType) => {
	const element = new Array(props.max).fill(null)

	const handleClick = (e: SyntheticEvent<HTMLElement>) => {
		if (!props.disabled) {
			// $FlowFixMe
			props.onClick(e.currentTarget.id)
		}
	}

	return (
		<div>
			{
				element.map((val, i) =>
					<StartIcon {...props} filled={i < Math.round(props.value)} onClick={handleClick} key={i} id={i + 1}/>
				)
			}
		</div>
	)
}

export default Rating
