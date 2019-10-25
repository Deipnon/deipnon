import { ApolloServer } from 'apollo-server-express'
import { merge } from 'ramda'
import { IS_DEV } from '../config'

import { typeDefs as BaseType, directives as BaseDirectives } from './base'
import {
	typeDefs as AuthTypes,
	resolvers as AuthResolvers,
	directives as AuthDirectives
} from './auth'
import {
	typeDefs as RestaurantTypes,
	resolvers as RestaurantResolvers
} from './restaurant'

const resolvers = {}
const directives = {}

export const apolloServer = new ApolloServer({
	playground: IS_DEV,
	introspection: IS_DEV,
	typeDefs: [BaseType, AuthTypes, RestaurantTypes],
	resolvers: [resolvers, AuthResolvers, RestaurantResolvers],
	schemaDirectives: merge(directives, BaseDirectives, AuthDirectives),
	context: ({ req }) => ({
		user: req.user
	})
})
