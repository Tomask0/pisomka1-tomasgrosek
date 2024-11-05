// src/types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add other properties as needed
      name: string;
      email: string;
      // Add any other user properties you expect
    };
  }
}
