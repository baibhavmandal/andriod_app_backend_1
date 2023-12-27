// routes/orderProductHistoryRoutes.js
import express from "express";
import orderProductHistoryController from "../controllers/orderProductHistoryController";

const router = express.Router();

// Route to create a new order product history entry
router.post(
  "/orderProductHistory",
  orderProductHistoryController.createOrderProductHistory
);

// Route to fetch all order product history entries
router.get(
  "/orderProductHistories",
  orderProductHistoryController.getAllOrderProductHistories
);

// Route to fetch order product history by order_product_id
router.get(
  "/orderProductHistory/:order_product_id",
  orderProductHistoryController.getOrderProductHistoryById
);

// Route to update order product history by order_product_id
router.put(
  "/orderProductHistory/:order_product_id",
  orderProductHistoryController.updateOrderProductHistoryById
);

// Route to delete order product history by order_product_id and subtract quantity and price
router.delete(
  "/orderProductHistory/:order_product_id/:order_id",
  orderProductHistoryController.deleteOrderProductHistoryById
);

export default router;
