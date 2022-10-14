import 'reflect-metadata'
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import UserResolver from './graphql/user/resolver';
import db from './db/connection';

export const createServer = async () => {
    return new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        context: ({req, res}) => {
            return {
                req,
                res,
                db
            }
        }
    })
}

createServer()