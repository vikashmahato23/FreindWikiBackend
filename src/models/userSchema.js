const mongoose = require("mongoose");
const { Schema } = mongoose;
const authSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: function (v) {
        // Email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: function () {
      // At least one of email or phone should be present
      return !this.phone;
    },
  },
  phone: {
    type: String,
    unique:true,
    validate: {
      validator: function (v) {
        // Phone number validation regex (simplified for demonstration)
        return /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: function () {
      // At least one of email or phone should be present
      return !this.email;
    },
  },
 
});
module.exports = mongoose.model("User", authSchema);