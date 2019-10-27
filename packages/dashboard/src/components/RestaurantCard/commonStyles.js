// @flow
import styled from '@emotion/styled'
import theme from '@deipnon/themes/lib'

export const FormGroup = styled('div')`
	margin-bottom: 24px;
`
export const FormLabel = styled('label')`
	font-size: 14px;
	line-height: 22.4px;
	vertical-align: top;
	margin-bottom: 8px;
	font-weight: 400;
	color: ${theme.styles.formLabelColor};
	display: inline-block;
`
