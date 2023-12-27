// routes/orderHistoryDetailsRoutes.js
import express from "express";
import orderHistoryDetailsController from "../controllers/orderHistoryDetailsController";

const router = express.Router();

// Route to create a new order
router.post("/orders", orderHistoryDetailsController.createOrder);

// Route to fetch a single order by order_id
router.get("/orders/:order_id", orderHistoryDetailsController.getOrderById);

// Route to update an order by order_id
router.put("/orders/:order_id", orderHistoryDetailsController.updateOrderById);

// Route to delete an order by order_id
router.delete(
  "/orders/:order_id",
  orderHistoryDetailsController.deleteOrderById
);

export default router;
