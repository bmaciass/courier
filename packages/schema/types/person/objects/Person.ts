import { builder } from '../../../builder'

builder.prismaObject('Person', {
  fields: (t) => ({
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
    id: t.exposeString('identityNumber')
  }),
})