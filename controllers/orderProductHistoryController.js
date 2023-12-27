// controllers/orderProductHistoryController.js
import OrderProductHistory from "../models/orderProductHistory";

// Controller function to create a new order product history entry
export const createOrderProductHistory = async (req, res) => {
  try {
    const { order_id, partner_id, pickup_id, product_id, quantity, price } =
      req.body;

    // Create a new order product history document
    const newOrderProductHistory = new OrderProductHistory({
      order_id,
      partner_id,
      pickup_id,
      product_id,
      quantity,
      price,
    });

    // Save the order product history document to the database
    await newOrderProductHistory.save();

    // Respond with order product history data
    const orderProductHistoryResponse = {
      order_product_id: newOrderProductHistory.order_product_id,
      order_ids: newOrderProductHistory.order_ids,
      partner_id: newOrderProductHistory.partner_id,
      pickup_id: newOrderProductHistory.pickup_id,
      product_id: newOrderProductHistory.product_id,
      quantity: newOrderProductHistory.quantity,
      price: newOrderProductHistory.price,
    };

    res.status(201).json({
      message: "Order product history created successfully",
      orderProductHistory: orderProductHistoryResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to fetch all order product history entries
export const getAllOrderProductHistories = async (req, res) => {
  try {
    // Retrieve all order product history documents from the database
    const orderProductHistories = await OrderProductHistory.find();

    // Respond with order product history data excluding unnecessary details
    const response = orderProductHistories.map((history) => ({
      order_product_id: history.order_product_id,
      order_ids: history.order_ids,
      partner_id: history.partner_id,
      pickup_id: history.pickup_id,
      product_id: history.product_id,
      quantity: history.quantity,
      price: history.price,
    }));

    res.status(200).json({ orderProductHistories: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to fetch order product history by order_product_id
export const getOrderProductHistoryById = async (req, res) => {
  try {
    const { order_product_id } = req.params;

    // Retrieve order product history document by order_product_id from the database
    const orderProductHistory = await OrderProductHistory.findOne({
      order_product_id,
    });

    if (!orderProductHistory) {
      return res
        .status(404)
        .json({ message: "Order product history not found" });
    }

    // Respond with order product history data excluding unnecessary details
    const response = {
      order_product_id: orderProductHistory.order_product_id,
      order_ids: orderProductHistory.order_ids,
      partner_id: orderProductHistory.partner_id,
      pickup_id: orderProductHistory.pickup_id,
      product_id: orderProductHistory.product_id,
      quantity: orderProductHistory.quantity,
      price: orderProductHistory.price,
    };

    res.status(200).json({ orderProductHistory: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to update order product history by order_product_id
export const updateOrderProductHistoryById = async (req, res) => {
  try {
    const { order_product_id } = req.params;
    const { quantity, price } = req.body;

    // Find the existing order product history by order_product_id
    const existingOrderProductHistory = await OrderProductHistory.findOne({
      order_product_id,
    });

    if (!existingOrderProductHistory) {
      return res
        .status(404)
        .json({ message: "Order product history not found" });
    }

    // Update fields with new values or keep existing values if not provided
    existingOrderProductHistory.quantity =
      quantity || existingOrderProductHistory.quantity;
    existingOrderProductHistory.price =
      price || existingOrderProductHistory.price;

    // Save the updated order product history to the database
    await existingOrderProductHistory.save();

    // Respond with updated order product history data
    const updatedOrderProductHistory = {
      order_product_id: existingOrderProductHistory.order_product_id,
      order_ids: existingOrderProductHistory.order_ids,
      partner_id: existingOrderProductHistory.partner_id,
      pickup_id: existingOrderProductHistory.pickup_id,
      product_id: existingOrderProductHistory.product_id,
      quantity: existingOrderProductHistory.quantity,
      price: existingOrderProductHistory.price,
    };

    res.status(200).json({
      message: "Order product history updated successfully",
      orderProductHistory: updatedOrderProductHistory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to delete a specific order_id from the array of order_ids and subtract quantity and price
export const deleteOrderProductHistoryById = async (req, res) => {
  try {
    const { order_product_id, order_id } = req.params;
    const { quantity, price } = req.body;

    // Find and update the order product history document
    const updatedOrderProductHistory =
      await OrderProductHistory.findOneAndUpdate(
        { order_product_id, order_ids: order_id }, // Ensure both order_product_id and order_id exist in the array
        {
          $pull: { order_ids: order_id },
          $inc: { quantity: -quantity, price: -price }, // Subtract the provided quantity and price
        },
        { new: true } // To return the updated document
      );

    if (!updatedOrderProductHistory) {
      return res.status(404).json({
        message:
          "Order product history not found or provided order_id not in array",
      });
    }

    // Respond with the updated order product history data
    const response = {
      order_product_id: updatedOrderProductHistory.order_product_id,
      order_ids: updatedOrderProductHistory.order_ids,
      partner_id: updatedOrderProductHistory.partner_id,
      pickup_id: updatedOrderProductHistory.pickup_id,
      product_id: updatedOrderProductHistory.product_id,
      quantity: updatedOrderProductHistory.quantity,
      price: updatedOrderProductHistory.price,
    };

    res.status(200).json({
      message: "Order product history updated successfully",
      orderProductHistory: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  createOrderProductHistory,
  getAllOrderProductHistories,
  getOrderProductHistoryById,
  updateOrderProductHistoryById,
  deleteOrderProductHistoryById,
};
