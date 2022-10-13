import 'reflect-metadata'
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import AuthResolver from './resolvers/auth-resolver';
import db from './db/knexfile';
import { createServer } from './server';

const main = async () => {
    const server = await createServer()
    server.listen({
        port: 4001
    }).then(({ port }) => {
        console.log('Listening on port ', port)
    })

    return server
}

main()