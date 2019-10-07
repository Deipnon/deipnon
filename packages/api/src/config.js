import dotEnv from 'dotenv'
dotEnv.config()

export const PORT = process.env.PORT
export const VERSION = 'v' + process.env.VERSION
export const DB_CONNECTION = process.env.DB_CONNECTION
