// controllers/partnerController.js
import Partner from "../models/partner";

const createPartner = async (req, res) => {
  try {
    // ... (Same as the route handler logic)
    const {
      name,
      mobile_no,
      email,
      password,
      client_type,
      pickup_id,
      center_name,
      center_mobile_no,
      center_email,
      address,
      landmark,
      city,
      state,
      pin_code,
      pan_number,
      center_photo,
      pan_photo,
    } = req.body;

    // Create a new partner document
    const newPartner = new Partner({
      name,
      mobile_no,
      email,
      password,
      client_type,
      pickup_id,
      center_name,
      center_mobile_no,
      center_email,
      address,
      landmark,
      city,
      state,
      pin_code,
      pan_number,
      center_photo,
      pan_photo,
    });

    // Save the partner document to the database
    await newPartner.save();

    // Respond with partner data
    const partnerResponse = {
      partner_id: newPartner.partner_id,
      name: newPartner.name,
      mobile_no: newPartner.mobile_no,
      email: newPartner.email,
      client_type: newPartner.client_type,
      pickup_id: newPartner.pickup_id,
      center_name: newPartner.center_name,
      center_mobile_no: newPartner.center_mobile_no,
      center_email: newPartner.center_email,
      address: newPartner.address,
      landmark: newPartner.landmark,
      city: newPartner.city,
      state: newPartner.state,
      pin_code: newPartner.pin_code,
      pan_number: newPartner.pan_number,
      center_photo: newPartner.center_photo,
      pan_photo: newPartner.pan_photo,
    };

    res.status(201).json({
      message: "Partner created successfully",
      partner: partnerResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPartnerById = async (req, res) => {
  try {
    // ... (Same as the route handler logic)
    const { partner_id } = req.params;

    // Retrieve partner document by partner_id from the database
    const partner = await Partner.findOne({ partner_id });

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    // Respond with partner data
    const partnerResponse = {
      partner_id: partner.partner_id,
      name: partner.name,
      mobile_no: partner.mobile_no,
      email: partner.email,
      client_type: partner.client_type,
      pickup_id: partner.pickup_id,
      center_name: partner.center_name,
      center_mobile_no: partner.center_mobile_no,
      center_email: partner.center_email,
      address: partner.address,
      landmark: partner.landmark,
      city: partner.city,
      state: partner.state,
      pin_code: partner.pin_code,
      pan_number: partner.pan_number,
      center_photo: partner.center_photo,
      pan_photo: partner.pan_photo,
    };

    res.status(200).json({ partner: partnerResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updatePartnerById = async (req, res) => {
  try {
    // ... (Same as the route handler logic)
    const { partner_id } = req.params;
    const {
      name,
      mobile_no,
      email,
      password,
      client_type,
      pickup_id,
      center_name,
      center_mobile_no,
      center_email,
      address,
      landmark,
      city,
      state,
      pin_code,
      pan_number,
      center_photo,
      pan_photo,
    } = req.body;

    // Find the existing partner by partner_id
    const existingPartner = await Partner.findOne({ partner_id });

    if (!existingPartner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    // Update fields with new values
    existingPartner.name = name || existingPartner.name;
    existingPartner.mobile_no = mobile_no || existingPartner.mobile_no;
    existingPartner.email = email || existingPartner.email;
    existingPartner.password = password || existingPartner.password;
    existingPartner.client_type = client_type || existingPartner.client_type;
    existingPartner.pickup_id = pickup_id || existingPartner.pickup_id;
    existingPartner.center_name = center_name || existingPartner.center_name;
    existingPartner.center_mobile_no =
      center_mobile_no || existingPartner.center_mobile_no;
    existingPartner.center_email = center_email || existingPartner.center_email;
    existingPartner.address = address || existingPartner.address;
    existingPartner.landmark = landmark || existingPartner.landmark;
    existingPartner.city = city || existingPartner.city;
    existingPartner.state = state || existingPartner.state;
    existingPartner.pin_code = pin_code || existingPartner.pin_code;
    existingPartner.pan_number = pan_number || existingPartner.pan_number;
    existingPartner.center_photo = center_photo || existingPartner.center_photo;
    existingPartner.pan_photo = pan_photo || existingPartner.pan_photo;

    // Save the updated partner to the database
    await existingPartner.save();

    // Respond with updated partner data
    const partnerResponse = {
      partner_id: existingPartner.partner_id,
      name: existingPartner.name,
      mobile_no: existingPartner.mobile_no,
      email: existingPartner.email,
      client_type: existingPartner.client_type,
      pickup_id: existingPartner.pickup_id,
      center_name: existingPartner.center_name,
      center_mobile_no: existingPartner.center_mobile_no,
      center_email: existingPartner.center_email,
      address: existingPartner.address,
      landmark: existingPartner.landmark,
      city: existingPartner.city,
      state: existingPartner.state,
      pin_code: existingPartner.pin_code,
      pan_number: existingPartner.pan_number,
      center_photo: existingPartner.center_photo,
      pan_photo: existingPartner.pan_photo,
    };

    res.status(200).json({
      message: "Partner updated successfully",
      partner: partnerResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePartnerById = async (req, res) => {
  try {
    // ... (Same as the route handler logic)
    const { partner_id } = req.params;

    // Find and delete the partner by partner_id
    const deletedPartner = await Partner.findOneAndDelete({ partner_id });

    if (!deletedPartner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    // Respond with a success message
    res.status(200).json({ message: "Partner deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  createPartner,
  getPartnerById,
  updatePartnerById,
  deletePartnerById,
};
