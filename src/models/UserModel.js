const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
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
});

const UserModel = model("Users", userSchema);

module.exports = UserModel;
