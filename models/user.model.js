const { boolean } = require("joi");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber : {
        type : String,
        unique: true,
        required: true
    },
    password: {
      type: String,
      required: true,
    },
    user_id : {
        type: String,
        required : true,
        unique: true
    },
    confirmation_id : {
        type: String,
        required : true,
        unique: true
    },
    is_deleted : {
        type : Boolean,
        default : false,
    }
  });
  
  const User = mongoose.model("User", userSchema);
  module.exports = User;