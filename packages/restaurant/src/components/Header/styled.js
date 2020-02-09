// @flow
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Layout } from 'antd'

export const Container = styled(Layout.Header)(({theme}) => css`
	background-color: ${theme.colors.neutrals.n100};
	-webkit-box-shadow: 0px 2px 4px 0px rgba(153,150,153, 1);	
	-moz-box-shadow: 0px 2px 4px 0px rgba(153,150,153,1);
	box-shadow: 0px 2px 4px 0px rgba(153,150,153,1);
`)