import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  OLLAMA_URL: z.string().default("http://localhost:11434"),
});

export const env = envSchema.parse(process.env);
