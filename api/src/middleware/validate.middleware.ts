import { NextFunction, Request, Response } from "express";
import { z, ZodType } from "zod";

const validate =
  <T>(schema: ZodType<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success)
      return res.status(400).json({
        success: false,
        errors: z.treeifyError(result.error),
      });

    req.body = result.data;
    next();
  };

export default validate;
