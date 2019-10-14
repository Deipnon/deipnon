import { ApolloServer } from 'apollo-server-express'
import { merge } from 'lodash'
import { IS_DEV } from '../config'

import { typeDefs as BaseType } from './base'

const resolvers = {}
const directives = {}

export const apolloServer = new ApolloServer({
	playground: IS_DEV,
	introspection: IS_DEV,
	typeDefs: [BaseType],
	resolvers: merge(resolvers),
	schemaDirectives: merge(directives)
})
