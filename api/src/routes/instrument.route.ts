import {
  fetchInstrumentById,
  fetchInstruments,
} from "@controllers/Instrument.controller";
import { Router } from "express";

const router = Router();

router.get("/", fetchInstruments);
router.get("/:tokenId", fetchInstrumentById);

export default router;
