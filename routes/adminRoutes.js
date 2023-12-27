// routes/adminRoutes.js
import express from "express";
import {
  createAdmin,
  getAllAdmins,
  getAdminByEmail,
  getAdminById,
} from "../controllers/adminController";

const router = express.Router();

// Route to create a new admin
router.post("/admin", createAdmin);

// Route to fetch all admins
router.get("/admins", getAllAdmins); // Only Admin can fetch admins data list

// Route to fetch admin by email
router.get("/adminByEmail/:email", getAdminByEmail); // Only Admin can fetch

// Route to fetch admin by admin_id
router.get("/adminById/:admin_id", getAdminById); // Only Admin can fetch

export default router;
