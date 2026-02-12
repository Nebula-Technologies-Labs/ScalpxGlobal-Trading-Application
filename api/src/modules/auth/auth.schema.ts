import { z } from "zod";
import { userRole } from "types/User";

export const loginRequestSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export type loginRequestBody = z.infer<typeof loginRequestSchema>;
