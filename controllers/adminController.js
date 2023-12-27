// controllers/adminController.js
import AdminDetails from "../models/adminDetails";

// Controller function to create a new admin
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Create a new admin document
    const newAdmin = new AdminDetails({
      name,
      email,
      password,
    });

    // Save the admin document to the database
    await newAdmin.save();

    // Respond with admin data excluding the password
    const adminResponse = { _id: newAdmin._id, name, email };
    res
      .status(201)
      .json({ message: "Admin created successfully", admin: adminResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to fetch all admins
export const getAllAdmins = async (req, res) => {
  try {
    // Retrieve all admin documents from the database excluding passwords
    const admins = await AdminDetails.find({}, { password: 0 });

    res.status(200).json({ admins });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to fetch admin by email
export const getAdminByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // Retrieve admin document by email from the database excluding password
    const admin = await AdminDetails.findOne({ email }, { password: 0 });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to fetch admin by admin_id
export const getAdminById = async (req, res) => {
  try {
    const { admin_id } = req.params;

    // Retrieve admin document by admin_id from the database excluding password
    const admin = await AdminDetails.findOne({ admin_id }, { password: 0 });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
