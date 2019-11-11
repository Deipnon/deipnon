// @flow

import React from 'react'
import { IoIosInformation } from 'react-icons/io'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

type PropsType = {|
    onClick: (e: SyntheticEvent<HTMLSelectElement>) => void
|}

const InfoButtonStyle = css`
    cursor: pointer;
`
const InfoButtonElement = styled(IoIosInformation)(InfoButtonStyle)

const InfoButton = (props: PropsType) => <InfoButtonElement {...props} />

export default InfoButton