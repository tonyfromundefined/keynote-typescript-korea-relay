import { graphql } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Context } from './context'
import resolvers from './resolvers'
import typeDefs from './schema.graphql'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers as any,
})

export function query({
  query,
  variables = {},
  context = {},
}:{
  query: string
  variables?: object
  context?: Context
}) {
  return graphql(schema, query, {}, context, variables)
}
