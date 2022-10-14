import { IsEmail, Matches, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import User from "../entities/user";

@InputType()
class RegistrationInput {
    @Field()
    @Matches(/^[a-zA-Z0-9_]{2,30}$/, {
        message: 'The username should only contains alphanumeric characters and should have a length between 2 to 30'
    })
    username: string

    @Field()
    @MinLength(2)
    display_name: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    @MinLength(6)
    password: string
}

@ObjectType()
class RegistrationResponse {
    @Field()
    token: string

    @Field()
    user: User
}

export {
    RegistrationInput,
    RegistrationResponse
} 