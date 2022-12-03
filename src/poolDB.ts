import Pool, { ClientConfig } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_PORT } = process.env

const PULL_COFIG: ClientConfig = {
    user: PG_USER,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PASSWORD,
    port: Number(PG_PORT),
}

const pool = new Pool.Pool(PULL_COFIG)

export { pool }