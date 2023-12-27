// models/orderProductHistory.js
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const orderProductHistorySchema = new mongoose.Schema({
  order_product_id: { type: String, default: uuidv4, unique: true },
  order_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
  ],
  partner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
    required: true,
  },
  pickup_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PickupBoy",
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const OrderProductHistory = mongoose.model(
  "OrderProductHistory",
  orderProductHistorySchema
);

export default OrderProductHistory;
