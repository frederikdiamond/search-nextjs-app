import type { Config } from "drizzle-kit";

export default {
  //   driver: "pg",
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: { url: process.env.DATABASE_URL! },
  out: "./drizzle",
} satisfies Config;
