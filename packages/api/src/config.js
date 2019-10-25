import dotEnv from 'dotenv'
dotEnv.config()

export const {
	env: { PORT, VERSION, DB_CONNECTION, IS_DEV, JWT_SECRET }
} = process
