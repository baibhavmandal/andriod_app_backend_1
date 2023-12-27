// models/pickupBoy.js
import mongoose from "mongoose";

const pickupBoySchema = new mongoose.Schema({
  pickup_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  mobile_no: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name_as_per_pan: { type: String, required: true },
  alt_mobile_no: { type: String },
  address: { type: String, required: true },
  landmark: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pin_code: { type: String, required: true },
  pan_number: { type: String, required: true, unique: true },
  driving_license_number: { type: String, required: true },
  adhar_number: { type: String, required: true },
  vehicle_number: { type: String, required: true },
  profile_photo: { type: String }, // Store file path or URL
  pan_photo: { type: String }, // Store file path or URL
  adhar_photo: { type: String }, // Store file path or URL
  rc_copy_photo: { type: String }, // Store file path or URL
  driving_license_photo: { type: String }, // Store file path or URL
  vehicle_photo: { type: String }, // Store file path or URL
  pickup_type: {
    type: String,
    enum: ["Home", "Home & Bus", "Bus"],
    required: true,
  },
  job_type: { type: String, enum: ["Full time", "Part time"], required: true },
  payment_type: {
    type: String,
    enum: [
      "Fixed",
      "Fixed & Incentive per pickup",
      "Only Incentive per pickup",
    ],
    required: true,
  },
  payouts_mode: {
    type: String,
    enum: ["UPI ID", "Bank Account"],
    required: true,
  },
  beneficiary_name: { type: String },
  bank_name: { type: String },
  account_number: { type: String },
  ifsc_code: { type: String },
  upi_id: { type: String },
  assigned_partner_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
  ],
});

const PickupBoy = mongoose.model("PickupBoy", pickupBoySchema);

export default PickupBoy;
