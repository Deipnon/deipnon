import { ApolloServer } from 'apollo-server-express'
import { merge } from 'ramda'
import { IS_DEV } from '../config'

import { typeDefs as BaseType } from './base'
import {
	typeDefs as RestaurantTypes,
	resolvers as RestaurantResolvers
} from './restaurant'

const resolvers = {}
const directives = {}

export const apolloServer = new ApolloServer({
	playground: IS_DEV,
	introspection: IS_DEV,
	typeDefs: [BaseType, RestaurantTypes],
	resolvers: merge(resolvers, RestaurantResolvers),
	schemaDirectives: merge(directives)
})
