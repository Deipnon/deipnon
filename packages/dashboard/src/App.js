import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Layout  from './views/Layout'
import Routes from './Routes'
import GlobalStyles from './GlobalStyles'

function App() {
 return (<Router><Layout>
	 	<GlobalStyles />
	 	<Routes />
		</Layout>
	</Router>)
}

export default App;
