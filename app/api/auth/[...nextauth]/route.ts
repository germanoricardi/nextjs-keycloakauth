import NextAuth from "next-auth"
import { authOptionsConfig } from '../../../../src/lib/auth'

const handler = NextAuth(authOptionsConfig)

export { handler as GET, handler as POST }