// models/partner.js
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const partnerSchema = new mongoose.Schema({
  partner_id: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  mobile_no: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  client_type: {
    type: String,
    enum: ["Bronze", "Silver", "Gold", "Platinum", "Diamond"],
    required: true,
  },
  pickup_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PickupBoy",
    required: true,
  },
  center_name: { type: String, required: true },
  center_mobile_no: { type: String, required: true },
  center_email: { type: String, required: true },
  address: { type: String, required: true },
  landmark: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pin_code: { type: String, required: true },
  pan_number: { type: String, required: true, unique: true },
  center_photo: { type: String }, // Store file path or URL
  pan_photo: { type: String }, // Store file path or URL
});

const Partner = mongoose.model("Partner", partnerSchema);

export default Partner;
