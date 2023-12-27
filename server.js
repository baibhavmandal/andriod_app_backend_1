import express from "express";
import process from "process";
import "dotenv/config";

import { connectDB } from "./db/connect.js";

// Routes
import adminRoutes from "./routes/adminRoutes";
import orderProductHistoryRoutes from "./routes/orderProductHistoryRoutes";
import orderRoutes from "./routes/orderRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";
import pickupBoyRoutes from "./routes/pickupBoyRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 8000;
const databaseUrl = process.env.DATABASE_URL;

app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/orderProductHistory", orderProductHistoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/pickupBoy", pickupBoyRoutes);
app.use("/api/product", productRoutes);

const start = async () => {
  try {
    await connectDB(databaseUrl);
    app.listen(PORT, console.log("Server running at " + PORT));
  } catch (error) {
    console.log(error);
  }
};

start();
