# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Make sure you have the following installed on your system before starting: Node.js (LTS version recommended), npm (or yarn, pnpm, or bun), PostgreSQL (configured and running locally or on a server), and Prisma CLI.

## Getting Started

1. Clone the repository and navigate to the project directory: `git clone <repository-url> && cd <project-folder>`

2. Install dependencies: `npm install` (or `yarn install`, `pnpm install`, or `bun install`)

3. Configure environment variables: Create a `.env` file in the project root and add the following variable with your PostgreSQL connection string: `DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>` (Replace `<user>`, `<password>`, `<host>`, `<port>`, and `<database>` with your PostgreSQL credentials.)

4. Generate Prisma Client and push the database schema: `npx prisma generate && npx prisma db push`

5. Generate your authentication secret: `npx auth secret`

6. Start the development server: `npm run dev` (or `yarn dev`, `pnpm dev`, or `bun dev`)

## Learn More

To learn more about the tools and frameworks used in this project, check out the following resources: [Next.js Documentation](https://nextjs.org/docs), [Prisma Documentation](https://www.prisma.io/docs), [Auth.js Documentation](https://authjs.dev/docs), and [PostgreSQL Documentation](https://www.postgresql.org/docs/).
