// @flow

import React from 'react'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

type PropsType = {|
    isSelected: boolean,
    onClick: (e: SyntheticEvent<HTMLSelectElement>) => void
|}

const EmptyIconStyle = css`
    color: ${theme.styles.favoriteButtonColorEmpty};
`
const FiiledIconStyle = css`
    color: ${theme.styles.favoriteButtonColor};
`
const EmptyIcon = styled(IoIosHeartEmpty)(EmptyIconStyle)
const FiiledIcon = styled(IoIosHeart)(FiiledIconStyle)

const FavoriteButton = (props: PropsType) => props.isSelected ? 
<FiiledIcon {...props}/> : <EmptyIcon {...props}/>

export default FavoriteButton