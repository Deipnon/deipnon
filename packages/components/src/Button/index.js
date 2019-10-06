import * as React from 'react'
import styled from '@emotion/styled'
import theme from '@deipnon/themes/lib'

const ButtonElement = styled.button`
  background-color: ${theme.styles.primaryButtonBg};
  color: ${theme.styles.primaryButton};
`

const Button = ({ children }) => <ButtonElement>{children}</ButtonElement>

export default Button
