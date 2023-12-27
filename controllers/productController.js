// controllers/pickupBoyController.js
import PickupBoy from "../models/pickupBoy";

const createPickupBoy = async (req, res) => {
  try {
    const {
      name,
      mobile_no,
      email,
      password,
      name_as_per_pan,
      alt_mobile_no,
      address,
      landmark,
      city,
      state,
      pin_code,
      pan_number,
      driving_license_number,
      adhar_number,
      vehicle_number,
      profile_photo,
      pan_photo,
      adhar_photo,
      rc_copy_photo,
      driving_license_photo,
      vehicle_photo,
      pickup_type,
      job_type,
      payment_type,
      payouts_mode,
      beneficiary_name,
      bank_name,
      account_number,
      ifsc_code,
      upi_id,
      assigned_partner_ids,
    } = req.body;

    const newPickupBoy = new PickupBoy({
      name,
      mobile_no,
      email,
      password,
      name_as_per_pan,
      alt_mobile_no,
      address,
      landmark,
      city,
      state,
      pin_code,
      pan_number,
      driving_license_number,
      adhar_number,
      vehicle_number,
      profile_photo,
      pan_photo,
      adhar_photo,
      rc_copy_photo,
      driving_license_photo,
      vehicle_photo,
      pickup_type,
      job_type,
      payment_type,
      payouts_mode,
      beneficiary_name,
      bank_name,
      account_number,
      ifsc_code,
      upi_id,
      assigned_partner_ids,
    });

    await newPickupBoy.save();

    // Respond with pickup boy data
    const pickupBoyResponse = {
      pickup_id: newPickupBoy.pickup_id,
      name: newPickupBoy.name,
      mobile_no: newPickupBoy.mobile_no,
      email: newPickupBoy.email,
      name_as_per_pan: newPickupBoy.name_as_per_pan,
      alt_mobile_no: newPickupBoy.alt_mobile_no,
      address: newPickupBoy.address,
      landmark: newPickupBoy.landmark,
      city: newPickupBoy.city,
      state: newPickupBoy.state,
      pin_code: newPickupBoy.pin_code,
      pan_number: newPickupBoy.pan_number,
      driving_license_number: newPickupBoy.driving_license_number,
      adhar_number: newPickupBoy.adhar_number,
      vehicle_number: newPickupBoy.vehicle_number,
      profile_photo: newPickupBoy.profile_photo,
      pan_photo: newPickupBoy.pan_photo,
      pickup_type: newPickupBoy.pickup_type,
      job_type: newPickupBoy.job_type,
      payment_type: newPickupBoy.payment_type,
      payouts_mode: newPickupBoy.payouts_mode,
      beneficiary_name: newPickupBoy.beneficiary_name,
      bank_name: newPickupBoy.bank_name,
      account_number: newPickupBoy.account_number,
      ifsc_code: newPickupBoy.ifsc_code,
      upi_id: newPickupBoy.upi_id,
      assigned_partner_ids: newPickupBoy.assigned_partner_ids,
    };

    res.status(201).json({
      message: "Pickup boy created successfully",
      pickupBoy: pickupBoyResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPickupBoyById = async (req, res) => {
  try {
    const { pickup_id } = req.params;

    const pickupBoy = await PickupBoy.findOne({ pickup_id });

    if (!pickupBoy) {
      return res.status(404).json({ message: "Pickup boy not found" });
    }

    // Respond with pickup boy data
    const pickupBoyResponse = {
      pickup_id: pickupBoy.pickup_id,
      name: pickupBoy.name,
      mobile_no: pickupBoy.mobile_no,
      email: pickupBoy.email,
      name_as_per_pan: pickupBoy.name_as_per_pan,
      alt_mobile_no: pickupBoy.alt_mobile_no,
      address: pickupBoy.address,
      landmark: pickupBoy.landmark,
      city: pickupBoy.city,
      state: pickupBoy.state,
      pin_code: pickupBoy.pin_code,
      pan_number: pickupBoy.pan_number,
      driving_license_number: pickupBoy.driving_license_number,
      adhar_number: pickupBoy.adhar_number,
      vehicle_number: pickupBoy.vehicle_number,
      profile_photo: pickupBoy.profile_photo,
      pan_photo: pickupBoy.pan_photo,
      adhar_photo: pickupBoy.adhar_photo,
      rc_copy_photo: pickupBoy.rc_copy_photo,
      driving_license_photo: pickupBoy.driving_license_photo,
      vehicle_photo: pickupBoy.vehicle_photo,
      pickup_type: pickupBoy.pickup_type,
      job_type: pickupBoy.job_type,
      payment_type: pickupBoy.payment_type,
      payouts_mode: pickupBoy.payouts_mode,
      beneficiary_name: pickupBoy.beneficiary_name,
      bank_name: pickupBoy.bank_name,
      account_number: pickupBoy.account_number,
      ifsc_code: pickupBoy.ifsc_code,
      upi_id: pickupBoy.upi_id,
      assigned_partner_ids: pickupBoy.assigned_partner_ids,
    };

    res.status(200).json({ pickupBoy: pickupBoyResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updatePickupBoyById = async (req, res) => {
  try {
    const { pickup_id } = req.params;
    const {
      name,
      mobile_no,
      email,
      name_as_per_pan,
      alt_mobile_no,
      address,
      landmark,
      city,
      state,
      pin_code,
      pan_number,
      driving_license_number,
      adhar_number,
      vehicle_number,
      profile_photo,
      pan_photo,
      adhar_photo,
      rc_copy_photo,
      driving_license_photo,
      vehicle_photo,
      pickup_type,
      job_type,
      payment_type,
      payouts_mode,
      beneficiary_name,
      bank_name,
      account_number,
      ifsc_code,
      upi_id,
      assigned_partner_ids,
    } = req.body;

    const existingPickupBoy = await PickupBoy.findOne({ pickup_id });

    if (!existingPickupBoy) {
      return res.status(404).json({ message: "Pickup boy not found" });
    }

    // Update fields with new values or keep existing values if not provided
    existingPickupBoy.name = name || existingPickupBoy.name;
    existingPickupBoy.mobile_no = mobile_no || existingPickupBoy.mobile_no;
    existingPickupBoy.email = email || existingPickupBoy.email;
    existingPickupBoy.name_as_per_pan =
      name_as_per_pan || existingPickupBoy.name_as_per_pan;
    existingPickupBoy.alt_mobile_no =
      alt_mobile_no || existingPickupBoy.alt_mobile_no;
    existingPickupBoy.address = address || existingPickupBoy.address;
    existingPickupBoy.landmark = landmark || existingPickupBoy.landmark;
    existingPickupBoy.city = city || existingPickupBoy.city;
    existingPickupBoy.state = state || existingPickupBoy.state;
    existingPickupBoy.pin_code = pin_code || existingPickupBoy.pin_code;
    existingPickupBoy.pan_number = pan_number || existingPickupBoy.pan_number;
    existingPickupBoy.driving_license_number =
      driving_license_number || existingPickupBoy.driving_license_number;
    existingPickupBoy.adhar_number =
      adhar_number || existingPickupBoy.adhar_number;
    existingPickupBoy.vehicle_number =
      vehicle_number || existingPickupBoy.vehicle_number;
    existingPickupBoy.profile_photo =
      profile_photo || existingPickupBoy.profile_photo;
    existingPickupBoy.pan_photo = pan_photo || existingPickupBoy.pan_photo;
    existingPickupBoy.adhar_photo =
      adhar_photo || existingPickupBoy.adhar_photo;
    existingPickupBoy.rc_copy_photo =
      rc_copy_photo || existingPickupBoy.rc_copy_photo;
    existingPickupBoy.driving_license_photo =
      driving_license_photo || existingPickupBoy.driving_license_photo;
    existingPickupBoy.vehicle_photo =
      vehicle_photo || existingPickupBoy.vehicle_photo;
    existingPickupBoy.pickup_type =
      pickup_type || existingPickupBoy.pickup_type;
    existingPickupBoy.job_type = job_type || existingPickupBoy.job_type;
    existingPickupBoy.payment_type =
      payment_type || existingPickupBoy.payment_type;
    existingPickupBoy.payouts_mode =
      payouts_mode || existingPickupBoy.payouts_mode;
    existingPickupBoy.beneficiary_name =
      beneficiary_name || existingPickupBoy.beneficiary_name;
    existingPickupBoy.bank_name = bank_name || existingPickupBoy.bank_name;
    existingPickupBoy.account_number =
      account_number || existingPickupBoy.account_number;
    existingPickupBoy.ifsc_code = ifsc_code || existingPickupBoy.ifsc_code;
    existingPickupBoy.upi_id = upi_id || existingPickupBoy.upi_id;
    existingPickupBoy.assigned_partner_ids =
      assigned_partner_ids || existingPickupBoy.assigned_partner_ids;

    await existingPickupBoy.save();

    // Respond with updated pickup boy data
    const pickupBoyResponse = {
      pickup_id: existingPickupBoy.pickup_id,
      name: existingPickupBoy.name,
      mobile_no: existingPickupBoy.mobile_no,
      email: existingPickupBoy.email,
      name_as_per_pan: existingPickupBoy.name_as_per_pan,
      alt_mobile_no: existingPickupBoy.alt_mobile_no,
      address: existingPickupBoy.address,
      landmark: existingPickupBoy.landmark,
      city: existingPickupBoy.city,
      state: existingPickupBoy.state,
      pin_code: existingPickupBoy.pin_code,
      pan_number: existingPickupBoy.pan_number,
      driving_license_number: existingPickupBoy.driving_license_number,
      adhar_number: existingPickupBoy.adhar_number,
      vehicle_number: existingPickupBoy.vehicle_number,
      profile_photo: existingPickupBoy.profile_photo,
      pan_photo: existingPickupBoy.pan_photo,
      adhar_photo: existingPickupBoy.adhar_photo,
      rc_copy_photo: existingPickupBoy.rc_copy_photo,
      driving_license_photo: existingPickupBoy.driving_license_photo,
      vehicle_photo: existingPickupBoy.vehicle_photo,
      pickup_type: existingPickupBoy.pickup_type,
      job_type: existingPickupBoy.job_type,
      payment_type: existingPickupBoy.payment_type,
      payouts_mode: existingPickupBoy.payouts_mode,
      beneficiary_name: existingPickupBoy.beneficiary_name,
      bank_name: existingPickupBoy.bank_name,
      account_number: existingPickupBoy.account_number,
      ifsc_code: existingPickupBoy.ifsc_code,
      upi_id: existingPickupBoy.upi_id,
      assigned_partner_ids: existingPickupBoy.assigned_partner_ids,
    };

    res.status(200).json({
      message: "Pickup boy updated successfully",
      pickupBoy: pickupBoyResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePickupBoyById = async (req, res) => {
  try {
    const { pickup_id } = req.params;

    const deletedPickupBoy = await PickupBoy.findOneAndDelete({ pickup_id });

    if (!deletedPickupBoy) {
      return res.status(404).json({ message: "Pickup boy not found" });
    }

    res.status(200).json({ message: "Pickup boy deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  createPickupBoy,
  getPickupBoyById,
  updatePickupBoyById,
  deletePickupBoyById,
};
