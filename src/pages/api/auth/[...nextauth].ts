import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from "../../../services/faundb";
import { query } from "faunadb";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    // jwt: {
    //     signingKey: process.env.SIGNING_KEY
    // },
    authorization: {
        params: {
            scope: "read:user"
        }
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            const { email } = user
            try {
                await fauna.query(
                    query.If(
                        query.Not(
                            query.Exists(
                                query.Match(
                                    query.Index('user_by_email'),
                                    query.Casefold(user.email)
                                )
                            )
                        ),
                        query.Create(
                            query.Collection('users'),
                            { data: { email } }
                        ),
                        query.Get(
                            query.Match(
                                query.Index('user_by_email'),
                                query.Casefold(user.email)
                            )
                        )
                    )
                )
                return true;
            } catch {
                return false;
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)