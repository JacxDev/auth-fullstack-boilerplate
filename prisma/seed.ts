import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Eliminar datos existentes
  await prisma.user.deleteMany();

  console.log("Existing data cleared.");

  // Crear usuario admin
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
      password: adminPassword,
      role: "admin",
    },
  });

  // Crear primer usuario cliente
  const client1Password = await bcrypt.hash("client123", 10);
  const client1 = await prisma.user.create({
    data: {
      email: "client1@example.com",
      name: "Client 1",
      password: client1Password,
      role: "client",
    },
  });


  // Crear segundo usuario cliente
  const client2Password = await bcrypt.hash("client456", 10);
  const client2 = await prisma.user.create({
    data: {
      email: "client2@example.com",
      name: "Client 2",
      password: client2Password,
      role: "client",
    },
  });

  console.log("Seed data created:", {
    admin,
    client1,
    client2,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
