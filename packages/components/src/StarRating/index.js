// @flow

import * as React from 'react'
import styled from '@emotion/styled'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const rateFillIconStyles = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: ${theme.styles.ratingFillColor};
    :hover{
        color: ${theme.styles.ratingHoverColor};
    }
`
const rateEmptyIconStyles = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: ${theme.styles.ratingEmptyColor};
    :hover{
        color: ${theme.styles.ratingHoverColor};
    }
`

const RateElement = styled('div')()
const StarFillIcon = styled(IoIosStar)`
    ${rateFillIconStyles}
`
const StarEmptyIcon = styled(IoIosStarOutline)`
    ${rateEmptyIconStyles}
`
const StarDisabledIcon = styled(IoIosStar)`
    width: 24px;
    height: 24px;
    color: ${theme.styles.ratingDisabledColor};
`
const StarEmptyDisabledIcon = styled(IoIosStarOutline)`
    width: 24px;
    height: 24px;
    color: ${theme.styles.ratingEmptyColor};
`

type PropsType = {
    disabled: boolean,
    max: number,
    onClick: (e: SyntheticEvent<HTMLInputElement>) => void,
    value: ?string
}

const Rating = (props: PropsType) => {
    const element = []
    for (let i = 1; i <= props.max; i++) { element.push(props.max[i]) }
    return (
        <RateElement>
            {
                element.map((val, i) => <React.Fragment key={i}>
                    {i < Math.round(props.value) ? (props.disabled ? <StarDisabledIcon /> : <StarFillIcon onClick={props.onClick.bind(null, i + 1)} value={props.value} />) :
                        (props.disabled ? <StarEmptyDisabledIcon onClick="return false" value={props.value} />
                            : <StarEmptyIcon onClick={props.onClick.bind(null, i + 1)} value={props.value} />)}
                </React.Fragment>
                )
            }
        </RateElement>
    )
}

export default Rating
