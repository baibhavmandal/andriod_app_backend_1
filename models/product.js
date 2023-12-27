import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productSchema = new mongoose.Schema({
  product_id: { type: String, default: uuidv4, unique: true },
  test_code: { type: String, required: true },
  test_profile: { type: String, required: true },
  category: { type: String, required: true },
  lab_type: { type: String, required: true },
  mrp: { type: Number, required: true },
  b2b_mrp: { type: Number, required: true },
  sample_type: { type: String, required: true },
  reporting_time: { type: String, required: true },
  zpl: { type: String, required: true },
  rpl: { type: String, required: true },
  fasting_required: { type: Boolean, default: false },
  img_url: { type: String },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
