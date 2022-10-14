import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class User {
    @Field(() => ID)
    id!: number

    @Field()
    username: string

    @Field()
    email: string

    password: string

    @Field()
    created_at: Date

    @Field()
    updated_at: Date

    @Field()
    display_name: string

    @Field()
    avatar?: string
}

export default User