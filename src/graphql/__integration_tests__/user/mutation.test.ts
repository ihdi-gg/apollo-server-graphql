import { gql } from "apollo-server"
import { createServer } from "../../../server"
import db from '../../../db/connection';

beforeEach(async () => {
    // knex
    await db.migrate.rollback()
    await db.migrate.latest()
})

afterEach(async () => {
    await db.migrate.rollback()
})


describe('user registration', () => {
    const REGISTER = gql`
        mutation($input: RegistrationInput!) {
            register(input: $input) {
                token
                user {
                    id
                    username
                    display_name
                    email
                    created_at
                    updated_at
                }
            }
        }
    `

    it('should register a user', async () => {
        const server = await createServer()
    
        const response = await server.executeOperation({
            query: REGISTER,
            variables: {
                input: {
                    username: 'admin',
                    display_name: 'Admin',
                    email: 'admin@test.fr',
                    password: 'password',
                },
            }
        })
        
        expect(response.errors).toBeUndefined()
        expect(response.data?.register?.token).toBeDefined()
        expect(response.data?.register?.user?.username).toEqual('admin')
        expect(response.data?.register?.user?.email).toEqual('admin@test.fr')
    })
})