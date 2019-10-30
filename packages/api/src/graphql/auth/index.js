import jwt from 'jsonwebtoken'
import argon2 from 'argon2'
import {
	gql,
	ValidationError,
	AuthenticationError
} from 'apollo-server-express'
import { JWT_SECRET } from '../../config'
import Users from '../../models/Users'

export const typeDefs = gql`
	extend type Query {
		me: User
	}

	extend type Mutation {
		register(
			name: String!
			email: String!
			password: String!
			addresses: [UserAddressInput]!
		): Boolean
		authenticate(email: String!, password: String!): LoginResponse
	}

	type User {
		_id: ID!
		name: String!
		email: String!
	}

	type LoginResponse {
		token: String!
		user: User!
	}

	input UserAddressInput {
		friendlyName: String!
		addressLine: String!
		zipCode: String!
		city: String!
		state: String!
		phone: String!
		isDefault: Boolean
	}
`
export const resolvers = {
	Mutation: {
		register: async (_, { name, email, password, addresses }) => {
			if (await Users.findOne({ email })) {
				throw new ValidationError(`User with email (${email}) already exists.`)
			}

			const hashedPassword = await argon2.hash(password)

			const user = await Users.create({
				name,
				email,
				provider: 'none',
				credentials: {
					password: hashedPassword,
					passwordSalt: 'none',
					lastLogin: 0
				},
				addresses
			})

			return !!user
		},
		authenticate: async (_, { email, password }) => {
			const user = await Users.findOne({ email })

			if (!user) {
				throw new AuthenticationError('No such user.')
			}

			const passwordCheck = await argon2.verify(
				user.credentials.password,
				password
			)

			if (!passwordCheck) {
				throw new AuthenticationError('Wrong password.')
			}

			await Users.findByIdAndUpdate(
				user._id,
				{
					$set: { 'credentials.lastLogin': new Date() }
				}
			)

			const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1y' })

			return {
				token,
				user
			}
		}
	},
	Query: {
		me: (_, __, context) => {
			return context.user
		}
	}
}

export const directives = {}
