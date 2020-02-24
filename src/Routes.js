// @flow
import * as React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './views/Home'
import Orders from './views/Orders'
import Menu from './views/Menu'
import Settings from './views/Settings'

const Routes = () => (<Switch>
	<Route exact path="/" component={Home} />
	<Route path="/orders" component={Orders} />
	<Route path="/menu" component={Menu} />	
	<Route path="/settings/:id" component={Settings} />
</Switch>)

export default Routes
