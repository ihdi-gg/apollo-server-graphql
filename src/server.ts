import 'reflect-metadata'
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import AuthResolver from './resolvers/auth-resolver';

export const createServer = async () => {
    return new ApolloServer({
        schema: await buildSchema({
            resolvers: [AuthResolver]
        }),
    })
}

createServer()