Referencias

Este tutorial não cobre o quarto argumento do resolvedor. Para saber mais sobre esse tópico, confira estes dois artigos:
https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e
https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a

Adicionando modelo(Vote)
Tem relações um-para-muitos para o User e o Link.
prisma/datamodel.prisma

type Link {
  id: ID! @id
  createdAt: DateTime! @createdAt
  description: String!
  url: String!
  postedBy: User
  votes: [Vote!]!
}

type User {
  id: ID! @id
  name: String!
  email: String! @unique
  password: String!
  links: [Link!]!
  votes: [Vote!]!
}

type Vote {
  id: ID! @id
  link: Link!
  user: User!
}
Para aplicar as alterações e atualizar sua API do cliente Prisma para incluir operações CRUD para o novo Votetipo, você precisará implantar o serviço novamente.
\hackernews-code\src\prisma>
prisma deploy