// @flow
import * as React from 'react'
import Container from './Container'

import { type ChildrenPropsType as ContainerPropsType } from './Container'

const Settings = () => (<Container>
	{({ restaurant, onUpdateRestaurant }: ContainerPropsType) => (<div>Ok</div>)}
</Container>)

export default Settings
