import * as React from 'react'
import styled from '@emotion/styled'

const ButtonElement = styled.button`
  background-color: red;
  color: white;
`

const Button = ({ children }) => <ButtonElement>{children}</ButtonElement>

export default Button
