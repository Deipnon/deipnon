import dotEnv from 'dotenv'
dotEnv.config();

export const PORT = process.env.PORT;
export const DB_CONNECTION = process.env.DB_CONNECTION;
