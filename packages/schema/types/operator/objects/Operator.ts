import { builder } from '../../../builder'

builder.prismaObject('Operator', {
  fields: (t) => ({
    uid: t.exposeString('uid'),
    person: t.relation('person')
  }),
})