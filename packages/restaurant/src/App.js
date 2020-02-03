import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'emotion-theming';
import { theme, Button } from '@sumup/circuit-ui';

import Layout  from './views/Layout'
import Routes from './Routes'
import GlobalStyles from './GlobalStyles'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

function App() {
 return (
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme.circuit}>
			<Router>
				<Layout>
					<Button primary>Click me</Button>
					<GlobalStyles />
					<Routes />
				</Layout>
			</Router>
		</ThemeProvider>
	</ApolloProvider>
	)
}


export default App
