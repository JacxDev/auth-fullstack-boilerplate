import { db } from "@/lib/db";

const isValidSession = async (sessionToken: string): Promise<boolean> => {
  const session = await db.session.findUnique({
    where: { sessionToken },
  });

  return !!session && session.expires > new Date();
};

export default isValidSession;
