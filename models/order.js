import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const orderHistoryDetailsSchema = new mongoose.Schema({
  order_id: { type: String, default: uuidv4, unique: true },
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
  order_date: { type: Date, default: Date.now },
  order_status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered"],
    default: "Pending",
  },
  product_quantity: { type: Number, required: true },
  product_price: { type: Number, required: true },
  total_price: { type: Number, required: true },
});

const OrderHistoryDetails = mongoose.model(
  "OrderHistoryDetails",
  orderHistoryDetailsSchema
);

export default OrderHistoryDetails;
