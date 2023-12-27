import jwt from "jsonwebtoken";
import Admin from "../models/adminModel";
import Partner from "../models/partnerModel";
import PickupBoy from "../models/pickupBoyModel";

// Middleware for verifying admin tokens
export const verifyAdminToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "yourSecretKey"); // Replace with your actual secret key

    if (decoded.admin_id) {
      Admin.findById(decoded.admin_id, (err, admin) => {
        if (err || !admin) {
          return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token" });
        }

        req.user = admin;
        next();
      });
    } else {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token for admin" });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

// Middleware for verifying partner tokens
export const verifyPartnerToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "yourSecretKey"); // Replace with your actual secret key

    if (decoded.partner_id) {
      Partner.findById(decoded.partner_id, (err, partner) => {
        if (err || !partner) {
          return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token" });
        }

        req.user = partner;
        next();
      });
    } else {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token for admin" });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

// Middleware for verifying pickupBoy tokens
export const verifyPickupBoyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "yourSecretKey"); // Replace with your actual secret key

    if (decoded.pickup_id) {
      PickupBoy.findById(decoded.pickup_id, (err, pickupBoy) => {
        if (err || !pickupBoy) {
          return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token" });
        }

        req.user = pickupBoy;
        next();
      });
    } else {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token for admin" });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
