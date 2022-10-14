import { Knex } from "knex"
import User from "../entities/user"
import { RegistrationInput } from "../types/registration"

const createUser = async (db: Knex, input: RegistrationInput): Promise<User> => {
    const [user] = await db('users')
        .insert({
            ...input,
        })
        .returning('*')
    return user
}

export {
    createUser
}