// models/adminDetails.js
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const adminDetailsSchema = new mongoose.Schema({
  admin_id: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminDetails = mongoose.model("AdminDetails", adminDetailsSchema);

export default AdminDetails;
