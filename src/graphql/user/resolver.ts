import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "../../types/context";
import { RegistrationInput, RegistrationResponse } from "./types/registration";
import register from "./services/registration";

@Resolver()
class UserResolver {
    @Query(() => String)
    async me() {
        return 'Hello world'
    }

    @Mutation(() => RegistrationResponse)
    async register(@Arg('input') input: RegistrationInput, @Ctx() ctx: MyContext) {
        return await register(ctx.db, input);
    }
}

export default UserResolver