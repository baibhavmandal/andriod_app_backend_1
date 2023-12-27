// routes/partnerRoutes.js
import express from "express";
import partnerController from "../controllers/partnerController";

const router = express.Router();

// Route to create a new partner
router.post("/partners", partnerController.createPartner);

// Route to fetch a single partner by partner_id
router.get("/partners/:partner_id", partnerController.getPartnerById);

// Route to update a partner by partner_id
router.put("/partners/:partner_id", partnerController.updatePartnerById);

// Route to delete a partner by partner_id
router.delete("/partners/:partner_id", partnerController.deletePartnerById);

export default router;
