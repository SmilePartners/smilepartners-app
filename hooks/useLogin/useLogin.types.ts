import { type z } from 'zod'
import { type loginDataSchema, type apiResponseSchema } from './useLogin.schema'

export type ApiResponseData = z.infer<typeof apiResponseSchema>

export type LoginData = z.infer<typeof loginDataSchema>
