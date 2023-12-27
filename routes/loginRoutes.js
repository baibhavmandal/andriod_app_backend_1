import express from "express";
import {
  partnerLogin,
  pickupBoyLogin,
  adminLogin,
} from "../controllers/authController";

const router = express.Router();

// Partner login route
router.post("/partner/login", partnerLogin);

// Pickup Boy login route
router.post("/pickupboy/login", pickupBoyLogin);

// Admin login route
router.post("/admin/login", adminLogin);

export default router;
