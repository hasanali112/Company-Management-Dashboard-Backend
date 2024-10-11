import { z } from 'zod'

const userSchemaValidation = z.object({
  role: z.enum(['admin', 'manager', 'employee']),
  password: z.string({ message: 'password is required' }),
  isPasswordChanged: z.boolean(),
  status: z.enum(['active', 'pending', 'blocked']),
  isDeleted: z.boolean().default(false),
})

export const userValidation = {
  userSchemaValidation,
}
