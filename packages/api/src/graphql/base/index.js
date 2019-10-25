import { gql } from 'apollo-server-express'

export const typeDefs = gql`
	type Query {
		_: String!
	}
	type Mutation {
		_: String!
	}
`

export const directives = {}
