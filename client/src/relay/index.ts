import { RecordSource, Store, Network, Environment } from 'relay-runtime'
import { query } from '../schema'
import { Context } from '../schema/context'

const source = new RecordSource()
const store = new Store(source)

let environment: Environment | null = null

export function createEnvironment(context: Context = {}) {
  if (environment) {
    return environment
  }

  return new Environment({
    network: createNetwork(context),
    store,
  })
}

export function createNetwork(context: Context) {
  return Network.create((operation, variables) => {
    return query({
      query: operation.text!,
      variables,
      context,
    }) as any
  })
}
