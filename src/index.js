const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./src/generated/prisma-client')

// 2 - O resolvers objeto é a implementação real do esquema GraphQL.
const resolvers = {
    Query: {
        info: () => null, //`This is the API of a Hackernews Clone`
        // 2
        
    },
    Mutation: {
        // 2
        post: (root, args, context, info) => {
            return context.prisma.createLink({
                url: args.url,
                description: args.description,
            })
        },
    },

    // 3 - Pode ser omitido - Eles não são necessários porque o servidor GraphQL infere como eles são
    /*Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }*/
}

// 3 - esquema e os resolvedores são empacotados e passados ​​para o GraphQLServer que é importado graphql-yoga
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