import express from "express";
import { loginUserController } from "./auth.controller";

const router = express.Router();

router.post("/auth/login", loginUserController);

export default router;
