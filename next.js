import NextAuth from "next-auth";

const config = {
    providers: [],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);