import express from "express";
import InstrumentRoutes from "./instrument.route";
const router = express.Router();

// You can require and use your routes here ;)
router.use("/instrument", InstrumentRoutes);

export default router;
