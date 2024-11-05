import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions, SessionStrategy } from "next-auth"; // Import AuthOptions and SessionStrategy

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin", // You can customize the sign-in page path
  },
  session: {
    strategy: "jwt" as SessionStrategy, // Cast to SessionStrategy
  },
};

export default NextAuth(authOptions);
