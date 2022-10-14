import 'reflect-metadata'
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