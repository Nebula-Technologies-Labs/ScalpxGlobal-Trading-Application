import {
  registerClientByAdmin,
  registerBrokerByAdmin,
  fetchAllBrokers,
  fetchAllClients,
  deleteClient,
  deletebroker,
  fetchAllOrders,
  fetchClientById,
  blockClientAccount,
  unblockClientAccount,
  addFundsToClientAccount,
} from "@controllers/admin.controller";
import authenticate from "@middleware/authenticate";

const router = require("express").Router();

router.post("/register/client", authenticate, registerClientByAdmin);
router.post("/register/broker", authenticate, registerBrokerByAdmin);
router.get("/fetch/clients", authenticate, fetchAllClients);
router.get("/fetch/client/:clientId", authenticate, fetchClientById);
router.get("/fetch/brokers", authenticate, fetchAllBrokers);
router.get("/fetch/orders", authenticate, fetchAllOrders);
router.delete("/delete/client/:clientId", authenticate, deleteClient);
router.delete("/delete/broker/:brokerId", authenticate, deletebroker);
router.put("/client/block/:clientId", authenticate, blockClientAccount);
router.put("/client/unblock/:clientId", authenticate, unblockClientAccount);
router.put(
  "/client/funds/add/:clientId",
  authenticate,
  addFundsToClientAccount,
);

export default router;
