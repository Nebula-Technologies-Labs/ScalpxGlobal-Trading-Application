import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const token = await authService.loginUser(data);
    return res.status(200).json({ token });
  } catch (error) {
    next(error.message);
  }
};
