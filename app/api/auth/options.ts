import { API, URLS } from "@/lib/const";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const config = {
     headers: {
          "api-secret": process.env.API_SECRET,
     },
};
const headers = {
     "api-secret": process.env.API_SECRET || "",
     "Content-Type": "application/json",
};

export const options: NextAuthOptions = {
     providers: [
          CredentialsProvider({
               name: "Credentials",
               credentials: {
                    email: { label: "email", type: "email" },
                    password: { label: "Password", type: "password" },
               },
               async authorize(credentials, req) {
                    try {
                         const apiRoute = URLS.auth.signin.agent;
                         const loginPayload = {
                              email: credentials?.email,
                              password: credentials?.password,
                         };
                         const res = await fetch(API + apiRoute, {
                              method: "POST",
                              body: JSON.stringify(loginPayload),
                              headers,
                         });
                         const result = await res.json();
                         if (!result.status) {
                              return null;
                         } else {
                              const user: User = result?.data;
                              if (user.role === 'AGENT'){
                                   return user;
                              } else {
                                   return null;
                              }
                         }
                    } catch (error: any) {
                         console.log("error from login options ", { error });
                         return null;
                    }
               },
          }),
     ],
     session: {
          strategy: "jwt",
          maxAge: 60 * 60 * 24 * 0.25, // 6 hours
     },
     pages: {
          signIn: "/sign-in",
          error: "/sign-in",
     },
     jwt: {
          maxAge: 60 * 60 * 24 * 0.25, // 6 hours
     },
     callbacks: {
          session: ({ session, token }) => {
               session.user.access_token = token.access_token as string;
               session.user.role = token.role as string;
               session.user.id = token.id as string;
               return session;
          },
          jwt: ({ token, user }) => {
               if (user) token.access_token = user.access_token;
               if (user) token.role = user.role;
               if (user) token.id = user.id;
               return token;
          },
     },
};
