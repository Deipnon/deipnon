import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Button } from 'antd'

import Layout from './views/Layout';
import Routes from './Routes';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Layout>
					<Button>DENEME</Button>
					<Routes />
				</Layout>
			</Router>
		</ApolloProvider>
	);
}

export default App;
