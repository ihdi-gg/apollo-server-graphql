import { Knex } from "knex";
import argon2 from "argon2";
import { RegistrationInput, RegistrationResponse } from "../types/registration";
import { generateToken } from "../../../utils/util";
import { createUser } from "../repositories/user.repository";

const register = async (db: Knex, input: RegistrationInput): Promise<RegistrationResponse> => {
    const hash = await argon2.hash(input.password)

    const inputToDb: RegistrationInput = {
        ...input,
        password: hash

    }

    const user = await createUser(db, inputToDb);
    const token = generateToken(user)
    
    return {
        token,
        user,
    }
}

export default register