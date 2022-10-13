import { Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../types/context";

@Resolver()
class AuthResolver {
    @Query(() => String)
    async me(@Ctx() context: MyContext) {
        return 'Hello'
    }
}

export default AuthResolver