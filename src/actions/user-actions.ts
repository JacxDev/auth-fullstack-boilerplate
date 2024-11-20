"use server";

import { db } from "@/lib/db";
import { User } from "@/types";

export const getUserAction = async (email: string): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
      },
    });

    if (!user) return null;

    const userClient: User = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
    };

    return userClient;
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    throw new Error("Error interno del servidor");
  }
};
