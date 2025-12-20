import express from "express";
import InstrumentRoutes from "./instrument.route";
import UserRoutes from "./user.route";
import OrderRoutes from "./order.route";
const router = express.Router();

// You can require and use your routes here ;)
router.use("/instrument", InstrumentRoutes);
router.use("/user", UserRoutes);
router.use("/order", OrderRoutes);

export default router;
