// @flow
import * as React from 'react'
import { CardContainer, CardTitle } from './commonStyles'

type PropsType = {|
	children: React$Node,
	title?: string
|}

export default  ({ title, children }: PropsType) => (<CardContainer>
	{title && <CardTitle>{title}</CardTitle>}
	{children}
	</CardContainer>
)
