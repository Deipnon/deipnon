// @flow

import * as React from 'react'
import styled from '@emotion/styled'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'


const rateWrapperStyles = css`
    
`
const rateFillIconStyles = css`
    width: 24px;
    height: 24px;
    color: #ff9800;
    cursor: pointer;
    :hover{
        color: #ff9800;
    }
`
const rateEmptyIconStyles = css`
    width: 24px;
    height: 24px;
    color: #c7c7c7;
    cursor: pointer;
    :hover{
        color: #ff9800;
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
    color: #e0e0e0;
`

type PropsType = {
    max: number,
    disabled: boolean,
    onClick: (e: SyntheticEvent<HTMLInputElement>) => void,
    value: ?string
}


const Rating = (props: PropsType) => {
    let element = [];
    for (let i = 1; i <= props.max; i++) { element.push(props.max[i]) }
    return (
        <RateElement {...props}>
            {
                element.map((val, i) => <React.Fragment>
                    {i <= props.value ? (props.disabled ? <StarDisabledIcon /> : <StarFillIcon onClick={props.onClick.bind(this, i)} value={props.value}/>) : <StarEmptyIcon onClick={props.onClick.bind(this, i)} value={props.value}/>}
                    {console.log(i, "i", props.value, "props value")}
                </React.Fragment>
                )
            }
        </RateElement>
    )
}
{/* <RateInput type="radio" checked={props.checked} value={i} onClick={props.onClick}></RateInput>
                    <RateLabel>
                        {props.disabled ? <StarDisabledIcon /> : <StarIcon />}
                    </RateLabel> */}

export default Rating
