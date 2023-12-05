import { z } from "zod";
import { loginDataSchema, apiResponseSchema } from "./useLogin.schema";

export type ApiResponseData = z.infer<typeof apiResponseSchema>;

export type LoginData = z.infer<typeof loginDataSchema>;
