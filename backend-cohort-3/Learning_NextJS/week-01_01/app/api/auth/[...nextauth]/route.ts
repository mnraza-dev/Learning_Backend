import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {

                username: { label: "Username", type: "text", placeholder: "Enter Username" },
                password: { label: "Password", type: "password", placeholder: "Enter  Password " }

            },
            async authorize(credentials, req) {
                const username = credentials?.username
                const password = credentials?.password

                const user = {
                    id: "1",
                    name: "mnraza",
                    email: "mnraza67@gmail.com"
                }


                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),

        GoogleProvider({
            clientId: "ade",
            clientSecret: "ade"
        }),
        GithubProvider({
            clientId: "ade",
            clientSecret: "ade"
        })
    ]
})

export { handler as GET, handler as POST }
