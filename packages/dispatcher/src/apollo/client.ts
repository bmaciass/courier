import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_SCHEMA } from '@courier/api/src/config/constants'

export const client = new ApolloClient({
  uri: GRAPHQL_SCHEMA,
  cache: new InMemoryCache(),
})
