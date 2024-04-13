import { builder } from './builder'
import './types'

builder.queryType({
  fields: t => ({
    hello: t.string({
      resolve: () => 'world'
    })
  })
})

export const schema = builder.toSchema()