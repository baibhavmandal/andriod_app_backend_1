// routes/pickupBoyRoutes.js
import express from "express";
import pickupBoyController from "../controllers/pickupBoyController";

const router = express.Router();

// Route to create a new pickup boy
router.post("/pickupBoys", pickupBoyController.createPickupBoy);

// Route to fetch a single pickup boy by pickup_id
router.get("/pickupBoys/:pickup_id", pickupBoyController.getPickupBoyById);

// Route to update a pickup boy by pickup_id
router.put("/pickupBoys/:pickup_id", pickupBoyController.updatePickupBoyById);

// Route to delete a pickup boy by pickup_id
router.delete(
  "/pickupBoys/:pickup_id",
  pickupBoyController.deletePickupBoyById
);

export default router;
