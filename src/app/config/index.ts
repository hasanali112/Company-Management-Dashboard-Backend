import dotenv from 'dotenv'

dotenv.config()

export default {
  node: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_round: process.env.SALT_ROUND,
}
