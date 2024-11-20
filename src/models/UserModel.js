const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: Object,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: Number,
  },
  street: {
    type: String,
  },
  cardNumber: {
    type: Number,
  },
  city: {
    type: String,
  },

});

const UserModel = model("User", userSchema);

module.exports = UserModel;
