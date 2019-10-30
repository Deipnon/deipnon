// @flow
import styled from '@emotion/styled'
import theme from '@deipnon/themes/lib'

export const CardContainer = styled('div')`
	padding: 1.25rem 1.25rem;
	background-color: ${theme.styles.cardBgColor};
	background-clip: border-box;
	border: 1px solid ${theme.styles.cardBorderColor};
	border-radius: 0;
	width: 100%;
  min-width: 100%;
`

export const CardTitle = styled('h4')`
	color: ${theme.styles.cardTitleColor};
	margin: 0px;
	margin-bottom: 10px;
	text-transform: capitalize;
	font-size: .875rem;
	font-weight: 700;
`
