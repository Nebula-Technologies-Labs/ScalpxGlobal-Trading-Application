import {
  createOrder,
  fetchOrderBook,
  fetchOrders,
} from "@controllers/Order.controller";
import authenticate from "@middleware/authenticate";
import { Router } from "express";

const router = Router();

router.get("/", authenticate, fetchOrders);
router.get("/orderbook", authenticate, fetchOrderBook);
router.post("/", authenticate, createOrder);
export default router;
