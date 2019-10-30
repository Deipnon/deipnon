import { AuthenticationError } from 'apollo-server-express'
export const authenticated = next => (root, args, context, info) => {
	console.log(context.user)
	if (!context.user) {
		throw new AuthenticationError('Unauthenticated!')
	}

	return next(root, args, context, info)
}
