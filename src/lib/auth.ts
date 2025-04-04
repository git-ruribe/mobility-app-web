import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        isSupporter: { label: "Login as Supporter", type: "checkbox" }
      },
      async authorize(credentials) {
        // This is a demo app, so we'll accept any credentials
        // In a real app, you would validate against a database
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Create a mock user for demo purposes
        const user = {
          id: "1",
          name: credentials.isSupporter ? "John" : "Susan",
          email: credentials.email,
          isSupporter: credentials.isSupporter === "true"
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isSupporter = user.isSupporter;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.isSupporter = token.isSupporter as boolean;
      }
      return session;
    },
  },
};
