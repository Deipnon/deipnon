import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Layout  from './views/Layout'
import Routes from './Routes'
import GlobalStyles from './GlobalStyles'
import { GridInitializer } from '@deipnon/components/lib'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

function App() {
 return (
	<ApolloProvider client={client}>
		<Router>
			<Layout>
				<GridInitializer />
				<GlobalStyles />
				<Routes />
			</Layout>
		</Router>
	</ApolloProvider>
	)
}

export default App;
