import {
  fetchUserProfile,
} from "@controllers/User.controller";
import { Router } from "express";
import authenticate from "@middleware/authenticate";

const router = Router();

// User Routes
router.get("/", authenticate, fetchUserProfile);

export default router;
