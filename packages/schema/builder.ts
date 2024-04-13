import SchemaBuilder from '@pothos/core'
import { prisma } from '@courier/schema/db'
// import { withAccelerate } from '@prisma/extension-accelerate'
import PrismaPlugin from '@pothos/plugin-prisma'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'

import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { Env } from './types/env'
import { Prisma } from './prisma/generated/client'

// export const builder = new SchemaBuilder({})

export const builder = new SchemaBuilder<{
  AuthScopes: {
    public: boolean
  },
  PrismaTypes: PrismaTypes,
  Scalars: {
    JSON: {
      Input: unknown;
      Output: unknown;
    };
    Date: {
      Input: Date;
      Output: Date;
    };
  },
  Context: { env: Env }
}>({
  authScopes: async (context) => ({
    public: true,
  }),
  plugins: [ScopeAuthPlugin, PrismaPlugin],
  prisma: {
    client: prisma,
    dmmf: Prisma.dmmf,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
})
