import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  // TODO: Find way to skip ENV validation when running tests.
  client: {
    AUTH0_BASE_URL: z.string().optional(),
    AUTH0_CLIENT_ID: z.string().optional(),
    AUTH0_CLIENT_SECRET: z.string().optional(),
    AUTH0_ISSUER_BASE_URL: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
  },
})
