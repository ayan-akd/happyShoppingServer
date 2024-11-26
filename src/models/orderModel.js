const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = model("Orders", orderSchema);

module.exports = OrderModel;
