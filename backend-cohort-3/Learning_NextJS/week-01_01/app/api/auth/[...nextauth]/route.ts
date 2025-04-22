import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" , placeholder: "******"}
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
})

export { handler as GET, handler as POST }
