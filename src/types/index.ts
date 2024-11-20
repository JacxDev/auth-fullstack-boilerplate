import { $Enums } from "@prisma/client";

export interface User {
  id: string;
  email: string;
  name: string | null;
  role: $Enums.Role; // Usa el enum generado por Prisma
  image: string | null;
}
