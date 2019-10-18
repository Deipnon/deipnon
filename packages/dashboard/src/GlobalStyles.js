// @flow
import * as React from 'react'
import { Global, css } from '@emotion/core'

const globalStyles = css`
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

	body {
		font-family: 'Roboto', sans-serif;
		padding: 0;
		margin: 0;
	}
`

const GlobalStyles = () => <Global styles={globalStyles}/>

export default GlobalStyles
