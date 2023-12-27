import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Partner from "../models/partnerModel";
import PickupBoy from "../models/pickupBoyModel";
import Admin from "../models/adminModel";

// Function to generate JWT token
const generateToken = (user) => {
  const { admin_id, partner_id, pickup_id, email } = user;

  const token = jwt.sign(
    {
      id: admin_id || partner_id || pickup_id,
      email,
    },
    "yourSecretKey", // Replace with your actual secret key
    {
      expiresIn: "1h", // Token expiration time
    }
  );

  return token;
};

// Login controller for partner
export const partnerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the partner by email
    const partner = await Partner.findOne({ email });

    if (!partner) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, partner.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate and send the JWT token
    const token = generateToken(partner);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login controller for Pickup Boy
export const pickupBoyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the pickup boy by email
    const pickupBoy = await PickupBoy.findOne({ email });

    if (!pickupBoy) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, pickupBoy.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate and send the JWT token
    const token = generateToken(pickupBoy);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login controller for Admin
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate and send the JWT token
    const token = generateToken(admin);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
