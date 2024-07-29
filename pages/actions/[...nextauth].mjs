// pages/actions/[...nextauth].js
// how to render pages/actions/[...nextauth].js/server
'use server';



import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      port: process.env.PORT, // Replace with your SMTP port
      auth: {
        user: process.env.EMAIL_USER_NAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  // ... other NextAuth options
});