import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./lib/zod";
import { db } from "./lib/db";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials);

        if (!success || !data) {
          throw new Error("Invalid credentials");
        }

        const user = await db.user.findFirst({
          where: {
            email: data.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isValid = await bcrypt.compare(data?.password, user.password);
        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        await db.session.create({
          data: {
            userId: user.id,
            sessionToken: crypto.randomUUID(),
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
          },
        });

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
