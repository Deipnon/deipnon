import dotEnv from 'dotenv'
dotEnv.config()

export const { env: { PORT, VERSION, DB_CONNECTION } } = process
