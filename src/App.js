// @flow
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AUTH_TYPE } from 'aws-appsync'
import { ApolloProvider } from '@apollo/react-hooks';
import Amplify, { Auth } from 'aws-amplify'
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withAuthenticator } from 'aws-amplify-react'

// Configs
import AppSyncConfig from './aws-exports'

// Components
import Layout from './views/Layout';
import Routes from './Routes';

// Styles
import './App.less'

Amplify.configure(AppSyncConfig)

const url = AppSyncConfig.aws_appsync_graphqlEndpoint;
const region = AppSyncConfig.aws_appsync_region;
const auth = {
  type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  jwtToken: async () => 
    (await Auth.currentSession()).getIdToken().getJwtToken()
};

const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink(url, httpLink)
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

function App() {
	return (
		<ApolloProvider client={client}>
				<Router>
					<Layout>
						<Routes />
					</Layout>
				</Router>
		</ApolloProvider>
	);
}

export default withAuthenticator(App)