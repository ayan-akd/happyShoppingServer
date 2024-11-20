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
    type: String,
  },
  street: {
    type: String,
  },
  cardNumber: {
    type: String,
  },
  city: {
    type: String,
  },

});

const UserModel = model("User", userSchema);

module.exports = UserModel;
