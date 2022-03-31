import {ApolloServer, gql} from 'apollo-server-micro';
import {PrismaClient} from '@prisma/client';
import Cors from 'micro-cors';


const prisma = new PrismaClient()

const cors = Cors();

const typeDefs = gql`
    type Card {
        id: Int!,
        name: String!,
        email: String!,
        phone: String!,
        biography: String!,
        cardId: String!,
        twitter: String!,
        github: String!,
        website: String! 
        }

        
        type Query {
            getCards: [Card]
    }


`;

const resolvers = {
    Query: {
        getCards: async () => {
            const card = await prisma.card.findMany({
                take: 10,   
            })
        },
    },
};

export const config = {
    api: {
        bodyParser: false,
    }
}

const apolloServer  = new ApolloServer({  typeDefs,  resolvers,  });

const startServer = apolloServer.start();

export default async function handler(req, res)  {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://studio.apollographql.com"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
    );
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }
  
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);

};
  


  



