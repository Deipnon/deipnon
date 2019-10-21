// @flow

import React from 'react'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

type PropsType = {|
    isSelected: boolean,
    onClick: (e: SyntheticEvent<HTMLSelectElement>) => void
|}

const EmptyIconStyle = css`
    color:grey;
`
const FiiledIconStyle = css`
    color:red;
`
const EmptyIcon = styled(IoIosHeartEmpty)(EmptyIconStyle)
const FiiledIcon = styled(IoIosHeart)(FiiledIconStyle)

const FavoriteButtonElement = (props: PropsType) => {
    if (props.isSelected) {
        return <FiiledIcon {...props}/>
    }
    return <EmptyIcon {...props}/>
}

const FavoriteButton = (props: PropsType) => <FavoriteButtonElement {...props}/>

export default FavoriteButton