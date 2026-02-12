import {
  loginAdminUser,
  loginClientUser,
  registerAdminUser,
} from "@controllers/auth.controller";

const router = require("express").Router();

router.post("/admin/login", loginAdminUser);
router.post("/admin/register", registerAdminUser);
router.post("/client/login", loginClientUser);

export default router;
