const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./src/generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Vote = require('./resolvers/Vote')

//- O resolvers objeto é a implementação real do esquema GraphQL.
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
  }

//- esquema e os resolvedores são empacotados e passados ​​para o GraphQLServer que é importado graphql-yoga
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
        }
      },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))