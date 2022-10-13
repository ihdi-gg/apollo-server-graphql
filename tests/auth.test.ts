import { gql } from "apollo-server";
import assert from "assert";
import { createServer } from "../src/server";

const GET_ME = gql`
    query {
        me
    }
`

it('returns hello', async () => {
    const server = await createServer()

    const response = await server.executeOperation({query: GET_ME})
    
    expect(response.errors).toBeUndefined()
    expect(response.data?.me).toBe('Hello')
})