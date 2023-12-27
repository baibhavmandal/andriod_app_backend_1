// controllers/orderHistoryDetailsController.js
import OrderHistoryDetails from "../models/orderHistoryDetails";

const createOrder = async (req, res) => {
  try {
    const {
      partner_id,
      pickup_id,
      product_id,
      order_status,
      product_quantity,
      product_price,
      total_price,
    } = req.body;

    // Create a new order history details document
    const newOrder = new OrderHistoryDetails({
      partner_id,
      pickup_id,
      product_id,
      order_status,
      product_quantity,
      product_price,
      total_price,
    });

    // Save the order history details document to the database
    await newOrder.save();

    // Respond with order data
    const orderResponse = {
      order_id: newOrder.order_id,
      partner_id: newOrder.partner_id,
      pickup_id: newOrder.pickup_id,
      product_id: newOrder.product_id,
      order_date: newOrder.order_date,
      order_status: newOrder.order_status,
      product_quantity: newOrder.product_quantity,
      product_price: newOrder.product_price,
      total_price: newOrder.total_price,
    };

    res
      .status(201)
      .json({ message: "Order created successfully", order: orderResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { order_id } = req.params;

    // Retrieve order history details document by order_id from the database
    const order = await OrderHistoryDetails.findOne({ order_id });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Respond with order data
    const orderResponse = {
      order_id: order.order_id,
      partner_id: order.partner_id,
      pickup_id: order.pickup_id,
      product_id: order.product_id,
      order_date: order.order_date,
      order_status: order.order_status,
      product_quantity: order.product_quantity,
      product_price: order.product_price,
      total_price: order.total_price,
    };

    res.status(200).json({ order: orderResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateOrderById = async (req, res) => {
  try {
    const { order_id } = req.params;
    const { order_status, product_quantity, product_price, total_price } =
      req.body;

    // Find the existing order by order_id
    const existingOrder = await OrderHistoryDetails.findOne({ order_id });

    if (!existingOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update fields with new values or keep existing values if not provided
    existingOrder.order_status = order_status || existingOrder.order_status;
    existingOrder.product_quantity =
      product_quantity || existingOrder.product_quantity;
    existingOrder.product_price = product_price || existingOrder.product_price;
    existingOrder.total_price = total_price || existingOrder.total_price;

    // Save the updated order to the database
    await existingOrder.save();

    // Respond with updated order data
    const updatedOrder = {
      order_id: existingOrder.order_id,
      partner_id: existingOrder.partner_id,
      pickup_id: existingOrder.pickup_id,
      product_id: existingOrder.product_id,
      order_date: existingOrder.order_date,
      order_status: existingOrder.order_status,
      product_quantity: existingOrder.product_quantity,
      product_price: existingOrder.product_price,
      total_price: existingOrder.total_price,
    };

    res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const { order_id } = req.params;

    // Find and delete the order by order_id
    const deletedOrder = await OrderHistoryDetails.findOneAndDelete({
      order_id,
    });

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Respond with a success message
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
