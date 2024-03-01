import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  // needed props
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
