// @flow
import * as React from 'react'
import { Global, css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const globalStyles = css(theme.gridStyles)

const GridInitializer = () => <Global styles={globalStyles}/>

export default GridInitializer
