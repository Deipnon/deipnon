// @flow

import React from 'react'
import { IoIosInformation } from 'react-icons/io'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

type PropsType = {|
    onClick: (e: SyntheticEvent<HTMLSelectElement>) => void
|}

const InfoButtonElement = styled(IoIosInformation)`
	cursor:pointer;
`

export default InfoButtonElement
