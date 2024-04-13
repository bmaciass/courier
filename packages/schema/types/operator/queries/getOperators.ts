import { builder } from '@courier/schema/builder'
import {prisma} from '@courier/schema/db'

// import { PrismaClient } from '@prisma/client'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient()

builder.queryField('operators', (t) => {
  return t.prismaField({
    type: ['Operator'],
    resolve: (query, parent, args, ctx, info) => {
      // const prisma = new PrismaClient()
      return prisma.operator.findMany({ ...query })
    }
  })
})