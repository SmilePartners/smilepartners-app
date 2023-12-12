import { z } from "zod";

export const apiResponseSchema = z.object({
  token: z.string(),
  type: z.string(),
});

export const loginDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
