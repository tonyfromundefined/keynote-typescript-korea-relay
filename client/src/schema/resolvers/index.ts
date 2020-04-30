import axios from 'axios'
import { Resolvers } from './_types'

const resolvers: Resolvers = {
  Query: {
    async articles() {
      const { data } = await axios.get('http://localhost:7777/articles')
      return data.data?.articles
    },
    async users() {
      const { data } = await axios.get('http://localhost:7777/users')
      return data.data?.users
    }
  }
}

export default resolvers
