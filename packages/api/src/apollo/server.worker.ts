import { schema } from '@courier/schema/index'
import { createYoga } from 'graphql-yoga'
import type { Env } from '~/types/env'

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })

export default {
  // eslint-disable-next-line no-undef
  async fetch (request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    /* if (!process.env.NODE_ENV) {
      process.env.NODE_ENV = env.NODE_ENV
    }
    if (!process.env.DATABASE_URL) {
      process.env.DATABASE_URL = env.DATABASE_URL
    } */
    // const client = postgres(connectionString, { prepare: false })
    // const db = drizzle(client, { schema: DrizzleSchema })
    return yoga(request, { env })
  }
}
