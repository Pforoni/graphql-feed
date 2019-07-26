Referencias

Este tutorial não cobre o quarto argumento do resolvedor. Para saber mais sobre esse tópico, confira estes dois artigos:
https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e
https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a

#Começando com Prisma
https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/

#start project
node src/index.js

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

=====================================================================================================================================================
Neste tutorial, você aprendeu como construir um servidor GraphQL a partir do zero. A pilha usada foi baseado em Node.js , e Prisma .graphql-yogaAPI

graphql-yogaé uma biblioteca do servidor GraphQL rápida e simples, construída sobre o Express.js . Ele vem com vários recursos, como suporte pronto para uso em GraphQL Playgrounds e assinaturas em tempo real do GraphQL.

Os resolvedores do seu servidor GraphQL são implementados usando o cliente Prisma que é responsável pelo acesso ao banco de dados.

Se você quer mergulhar mais fundo e se tornar parte da incrível comunidade GraphQL, aqui estão algumas recomendações de recursos e da comunidade para você: específico ou a conter essa seqüência de filtro.

Prisma Blog : O blog apresenta regularmente conteúdos novos e interessantes sobre o GraphQL, desde notícias da comunidade até mergulhos profundos e vários tutoriais.
GraphQL Weekly : Um boletim semanal GraphQL com notícias do ecossistema GraphQL
GraphQL Conf : O maior encontro mundial de entusiastas do GraphQL acontecendo no coração de Berlim
Prisma Slack : Uma equipe do Slack com discussões vívidas em torno de tudo GraphQL & Prisma