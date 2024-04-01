import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

const dataBaseConnection =
  env.DATABASE_CLIENT === 'sqlite'
    ? {
        filename: env.DATABASE_URL,
      }
    : env.DATABASE_URL

export const config: Knex.Config = {
  // needed props
  client: env.DATABASE_CLIENT,
  connection: dataBaseConnection,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
