// routes/pickupBoyRoutes.js
import express from "express";
import pickupBoyController from "../controllers/pickupBoyController";

const router = express.Router();

router.post("/pickupBoys", pickupBoyController.createPickupBoy);
router.get("/pickupBoys/:pickup_id", pickupBoyController.getPickupBoyById);
router.put("/pickupBoys/:pickup_id", pickupBoyController.updatePickupBoyById);
router.delete(
  "/pickupBoys/:pickup_id",
  pickupBoyController.deletePickupBoyById
);

export default router;
